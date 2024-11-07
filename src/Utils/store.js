import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice"
import searchslice from "./searchslice";
import chatSlice from "./chatSlice";
const store=configureStore(
    {
        reducer:{//reducer not reducers 
            app:appSlice,
            search:searchslice,
            chat:chatSlice,
        }
    }
)

export default store