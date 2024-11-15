import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
        dark:false
    },
    reducers:{//reducer with s 
        toggleMenu:(state)=>{
            state.isMenuOpen=!state.isMenuOpen
        },
        closeMenu:(state)=>{
            state.isMenuOpen=false
        },
        toggleDarkMode:(state)=>{
            state.dark=!state.dark;
        }
    }
})
export const {toggleMenu,closeMenu,toggleDarkMode} = appSlice.actions
export default appSlice.reducer//no s 