import React from 'react'
import SideBar from './SideBar'
import Main from './Main'
import { Outlet } from 'react-router-dom'
import Head from "./Head";
import {useSelector} from "react-redux";
const Body=()=>{
    const dark=useSelector(store=>store.app.dark)
    return (
        <div className={`grid  grid-flow-col ${dark?'bg-black text-gray-100':'bg-white text-black'}`}>
            <Head/>
            <SideBar/>
            {/* <Main/> */}
            <Outlet/>
        </div>
    )
}
export default Body