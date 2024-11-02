import React, { useEffect, useState } from 'react'
import { useDispatch} from 'react-redux'
import { toggleMenu } from '../Utils/appSlice'

const Head=()=>{
    
    const[searchQuery,setSearchQuery]=useState("")
    const[suggestions,setSuggestions]=useState([])
    const [isFocused,setIsFocused]=useState(false)
    console.log(isFocused)
    useEffect(()=>{
        console.log(searchQuery)
        //make api call after every key press 
        //but if the difference between 2 api call is less than 200ms decline the api call 


        const timer = setTimeout(()=>getSearchSuggestions(),200)//everytime we call the function , we need to also remove it before the next call
        return ()=>{//the return of useEffect() will be called : check class based components
            clearTimeout(timer)
        }//this return function is called when the component is unmounting
    },[searchQuery])
    /*
    * key - "t"
    * - render component
    * - will call useEffect() make api call after 200 ms
    * key - "ta"
    * - for this , it will destroy the component (useEffect return is called)
    * - render component again
    * - will call useEffect() make api call again after 200 ms (new timer)
    *
    * if setTimeout is still counting , but new key is pressed , the current timer is declined and a new timer starts
    * else timer expired , no new key is pressed then api call is made
    * */

    const getSearchSuggestions=async ()=>{
        const data=await fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q="+searchQuery+"&key="+process.env.REACT_APP_KEY)
        const json= await data.json()
        // console.log(json?.items[0]?.snippet?.title)
        // console.log(json?.items[1]?.snippet?.title)
        const titles=json?.items?.map((item)=>item?.snippet?.title)
        console.log(titles)
        setSuggestions(titles)
    }

    const dispatch=useDispatch()
    const handleClick=()=>{
        dispatch(toggleMenu())
    }
    const handleFocus=()=>{
        setIsFocused(true)
    }
    const handleOutFocus=()=>{
        setIsFocused(false)
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
            <div className='col-span-10 '>
                <div className="">
                <input className='w-2/3  border py-2 px-4 border-gray-600 bg-gray-100 rounded-l-full' type="text"
                value={searchQuery}
                onChange={e=>setSearchQuery(e.target.value)}
                       onFocus={()=>handleFocus()}
                       onBlur={()=>handleOutFocus()}

                />
                <button className='border bg-gray-100 border-gray-600 py-2 px-4 rounded-r-full'>Search</button>
                </div>
                {isFocused && <div className={`fixed bg-white px-3 py-2 w-1/2 shadow-xl rounded-lg`}>
                    {<ul>{
                        suggestions?.map((suggest) => <li key={suggest}
                                                          className=" py-1 px-2 shadow-sm rounded-lg hover:bg-gray-200">🔍{suggest}</li>)
                    }
                    </ul>}
                </div>}
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