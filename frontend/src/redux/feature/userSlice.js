import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name : "user",
    initialState : {
        value : 0
    },
    reducers :{
        something : (state)=>{
            state.value 
        },
        
    }

})

export const {something} = userSlice.actions

export default userSlice.reducer