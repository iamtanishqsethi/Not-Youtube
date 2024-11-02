import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice"
import searchslice from "./searchslice";
const store=configureStore(
    {
        reducer:{//reducer not reducers 
            app:appSlice,
            search:searchslice,
        }
    }
)

export default store