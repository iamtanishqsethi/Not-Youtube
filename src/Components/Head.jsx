import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../Utils/appSlice'

const Head=()=>{
    
    
    const dispatch=useDispatch()
    const handleClick=()=>{
        dispatch(toggleMenu())
    }
    // console.log(isOpen)
    return (
        <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
            <div className='flex col-span-1 items-center '>
                <img 
                className='h-6 cursor-pointer'
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png" alt="menu" 
                onClick={()=>handleClick()}
                />
                <img 
                className='h-16 mx-2' src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg" alt="logo" />
            </div>
            <div className='col-span-10 flex items-center justify-center'>
                <input className='w-1/2  border py-1.5 px-2.5 border-gray-600 bg-gray-100 rounded-l-full' type="text" />
                <button className='border bg-gray-100 border-gray-600 py-1.5 px-2.5 rounded-r-full'>Search</button>
            </div>
            <div className='col-span-1 flex items-center'>
                <img
                className='h-8' 
                src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="user" />
            </div>

            
        </div>
    )
}
export default Head