import React from 'react'
import SideBar from './SideBar'
import Main from './Main'
import { Outlet } from 'react-router-dom'
import Head from "./Head";
const Body=()=>{
    return (
        <div className='grid  grid-flow-col'>
            <Head/>
            <SideBar/>
            {/* <Main/> */}
            <Outlet/>
        </div>
    )
}
export default Body