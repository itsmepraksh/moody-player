
import { createSlice } from "@reduxjs/toolkit";

export const moodSlice = createSlice({
    name : "mood",
    initialState : {
        value : null
    },
    reducers : {
        setMoodValue : (state , action)=>{
            state.value = action.payload
        }
    }
})


export const { setMoodValue } = moodSlice.actions

export default moodSlice.reducer