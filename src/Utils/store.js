import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice"
const store=configureStore(
    {
        reducer:{//reducer not reducers 
            app:appSlice,
        }
    }
)

export default store