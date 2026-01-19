import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./feature/userSlice"
import moodReducer from "./feature/moodSlice"

export const store = configureStore({
    reducer :{
        user : userReducer,
        mood : moodReducer
    }
})