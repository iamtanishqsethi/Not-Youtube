import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
    },
    reducers:{//reducer with s 
        toggleMenu:(state)=>{
            state.isMenuOpen=!state.isMenuOpen
        },
        closeMenu:(state)=>{
            state.isMenuOpen=false
        }
    }
})
export const {toggleMenu,closeMenu} = appSlice.actions
export default appSlice.reducer//no s 