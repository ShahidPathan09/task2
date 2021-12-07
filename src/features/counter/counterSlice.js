import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 0 },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementBy: (state, action) => {
            state.value += action.payload
        },
        decrementBy: (state, action) => {
            state.value = state.value % 2 === 0 ? state.value -= action.payload : state.value
        },
    }
})

export const { increment, decrement, incrementBy, decrementBy } = counterSlice.actions
export default counterSlice.reducer
