import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type CounterStateType = {
    value: number
}
const initialState: CounterStateType = {
    xxx: 0
}

export const counter1Slice = createSlice({
    name: "counter1",
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.xxx = state.xxx + 1
        },
        decrement: (state) => {
            state.xxx = state.xxx - 1
        },
        incrementByAmount: (state,
                            action: PayloadAction<number>) => {
            state.xxx = state.xxx + action.payload
        },
        decrementByAmount: (state,
                            action: PayloadAction<number>) => {
            state.xxx = state.xxx - action.payload
        },
        resetState: (state) => {
            state.value = 0
        }
    }
})

export const {
    increment,
    decrement,
    incrementByAmount,
    decrementByAmount,
    resetState
} = counter1Slice.actions