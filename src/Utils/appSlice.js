import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
    },
    reducers:{//reducer with s 
        toggleMenu:(state)=>{
            state.isMenuOpen=!state.isMenuOpen
        }
    }
})
export const {toggleMenu} = appSlice.actions
export default appSlice.reducer//no s 