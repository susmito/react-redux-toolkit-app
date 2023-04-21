import { createSlice } from '@reduxjs/toolkit'

export const reducer1Slice = createSlice({
    name: 'reducer1',
    initialState: {
        value: true
    },
    reducers: {
        UPDATE_VALUE: (state) => {
            state.value = !state.value
        },
        ADD_A_NODE: (state, action) => {
            state[action?.payload || 'default'] = action?.val
        },
        LAUNCH_IT_RECIEVED: (state, action) => {
            state.jsonData = action.payload
        }
    }
})

export const { ADD_A_NODE, UPDATE_VALUE, LAUNCH_IT_RECIEVED } = reducer1Slice.actions

export default reducer1Slice.reducer;