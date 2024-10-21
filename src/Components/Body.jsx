import React from 'react'
import SideBar from './SideBar'
import Main from './Main'
import { Outlet } from 'react-router-dom'
const Body=()=>{
    return (
        <div className='grid  grid-flow-col'>
            <SideBar/>
            {/* <Main/> */}
            <Outlet/>
        </div>
    )
}
export default Body