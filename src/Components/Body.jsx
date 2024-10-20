import React from 'react'
import SideBar from './SideBar'
import Main from './Main'
const Body=()=>{
    return (
        <div className='flex'>
            <SideBar/>
            <Main/>
        </div>
    )
}
export default Body