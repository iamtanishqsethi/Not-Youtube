import {createSlice} from "@reduxjs/toolkit";

const searchslice=createSlice({
    name:"search",
    initialState:{

    },
    reducers:{
        cacheResults:(state,action)=>{
            state=Object.assign(state,action.payload)
        }
    }
})
export const {cacheResults}= searchslice.actions
export default searchslice.reducer