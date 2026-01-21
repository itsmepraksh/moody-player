import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name : "user",
    initialState : {
        user : null,
        role : null
    },
    reducers :{
        setUser : (state,action)=>{
            state.user = action.payload,
            state.role = action.payload.useRole
        },

        clearUser : (state )=>{
            state.user = null,
            state.role = null
        }
        
    }

})

export const { setUser , clearUser} = userSlice.actions

export default userSlice.reducer