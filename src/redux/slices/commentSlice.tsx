import {IComment} from "../../models/IComment";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {commentService} from "../../services/comment.api.service";


type CommentSliceType = {
    comments: IComment[] | null
}

const commentInitState: CommentSliceType = {
    comments: []
}


const loadCommentsByPostId = createAsyncThunk(
    'commentSlice/loadCommentsByPostId',
    async (id: string , thunkAPI) => {

            try {
                const commentsOfPost = await commentService.getByPostId(id);
                return thunkAPI.fulfillWithValue(commentsOfPost)
            } catch (e) {
                const error = e as AxiosError
                return thunkAPI.rejectWithValue(error.response?.data)
            }

    }
);



export const commentSlice = createSlice({
    name: "commentSlice",
    initialState: commentInitState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(loadCommentsByPostId.fulfilled, (state, action) => {
                state.comments = action.payload
            })
    
})

export const commentActions = {
    ...commentSlice.actions,
    loadCommentsByPostId
}
