import {IPost} from "../../models/IPost";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {postService} from "../../services/post.api.service";


type PostSliceType = {
    posts: IPost[],
}

const postsInitState: PostSliceType = {
    posts: [],
}


const loadPosts = createAsyncThunk(
    'postSlice/loadPosts',
    async (arg, thunkAPI) => {

        try {
            const posts = await postService.getAll();
            return thunkAPI.fulfillWithValue(posts)
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data)
        }

    }
)



export const postSlice = createSlice({
    name: 'postSlice',
    initialState: postsInitState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(loadPosts.fulfilled, (state, action) => {
                state.posts = action.payload
            })
   
});

export const postActions = {
    ...postSlice.actions,
    loadPosts
}
