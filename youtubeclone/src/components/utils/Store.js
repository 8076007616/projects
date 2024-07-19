import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./Slice"
import chatReducer from './ChatSlice'
let store=configureStore({
    reducer:{
        app:appReducer,
        chat:chatReducer,
    }
})
export default store