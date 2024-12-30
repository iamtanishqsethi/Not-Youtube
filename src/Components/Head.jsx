import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {toggleDarkMode, toggleMenu} from '../Utils/appSlice'
import {cacheResults} from "../Utils/searchslice";
import {Link, useNavigate} from "react-router-dom";
import ButtonList from "./ButtonList";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faBell, faMoon, faSearch, faSun, faUser} from "@fortawesome/free-solid-svg-icons";

const Head=()=>{
    
    const[searchQuery,setSearchQuery]=useState("")
    const[suggestions,setSuggestions]=useState([])
    const [isFocused,setIsFocused]=useState(false)
    // console.log(isFocused)
    const searchCache=useSelector(store=>store.search)
    const navigate=useNavigate()

    useEffect(()=>{

        const timer = setTimeout(()=>{
            // if(searchCache[searchQuery]){
            //     setSuggestions(searchCache[searchQuery])
            // }
            // else {
                getSearchSuggestions()
            // }
            },200)//everytime we call the function , we need to also remove it before the next call
        return ()=>{//the return of useEffect() will be called : check class based components
            clearTimeout(timer)
        }//this return function is called when the component is unmounting
    },[searchQuery])


    const getSearchSuggestions=async ()=>{
        //API key 1
        const data=await fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q="+searchQuery+"&key="+process.env.REACT_APP_KEY2)
        const json= await data.json()
        setSuggestions(json?.items)
        //update cache
        // dispatch(cacheResults({
        //     [searchQuery]:titles
        // }))
    }
    console.log(suggestions)

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
    const dark=useSelector(store=>store.app.dark);
    const handleDarkMode=()=>{
        dispatch(toggleDarkMode())
    }
    // console.log(isOpen)

    return (
        <div className={`fixed z-10 p-2.5  ${dark?'bg-black text-gray-100':'bg-white text-black'} m-0  w-full `}>
            <div className=' grid grid-flow-col justify-between '>
                <div className='flex col-span-1 items-center '>
                    <h1 className="cursor-pointer text-xl p-2" onClick={() => handleClick()}><FontAwesomeIcon icon={faBars} /></h1>
                    <Link to={"/"}>
                        {!dark && <img
                            className='h-16 mx-2' src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
                            alt="logo"/>}
                        {dark && <img
                            className='h-16 mx-2' src="https://www.cultofmac.com/wp-content/uploads/2018/01/YouTube-dark.jpg"
                            alt="logo"/>}
                    </Link>

                </div>
                <div className='col-span-10 '>
                    <div className="py-2  ">
                        <input className={`w-3/5  border py-2 px-4 ${dark?'bg-zinc-900 border-zinc-800':'border-gray-600 bg-gray-100'} rounded-l-full`}
                               type="text"
                               value={searchQuery}
                               onChange={e => setSearchQuery(e.target.value)}
                               onFocus={() => handleFocus()}
                               onBlur={() => handleOutFocus()}

                        />
                        <button className={`border ${dark?'bg-zinc-900 border-zinc-800':'bg-gray-100 border-gray-600'} py-2 px-4 rounded-r-full`}><FontAwesomeIcon icon={faSearch} /></button>
                    </div>
                    {isFocused && <div className={`fixed ${dark?'bg-zinc-900':'bg-white'} px-3 py-2 w-1/2  shadow-xl rounded-lg`}>
                        <ul>
                        {suggestions?.map((suggest) => {
                            // console.log(suggest.id.videoId );
                            if (suggest?.id?.kind === 'youtube#video') {
                                return (
                                    <li
                                        key={suggest?.id?.videoId}
                                        className={`py-1 px-2 shadow-sm rounded-lg ${dark?'hover:bg-zinc-700':'hover:bg-gray-200'} cursor-pointer`}
                                        onMouseDown={(e) => e.preventDefault()}
                                        onClick={()=>{
                                            navigate("/watch?v="+ suggest?.id?.videoId)
                                            handleOutFocus()
                                        }}

                                    >
                                        <FontAwesomeIcon icon={faSearch} className="px-2"/>{suggest?.snippet?.title}
                                    </li>

                                );
                            }

                        })}
                        </ul>

                    </div>}
                </div>
                <div className='col-span-1 flex items-center justify-center px-4'>
                    <button onClick={()=>handleDarkMode()} className="pr-4 text-lg">
                        {
                            !dark&&<FontAwesomeIcon icon={faMoon} />
                        }
                        {
                            dark&&<FontAwesomeIcon icon={faSun}/>
                        }
                    </button>
                    <FontAwesomeIcon icon={faBell} className="text-xl pr-4"/>
                    <FontAwesomeIcon icon={faUser} className="text-xl"/>

                </div>
            </div>

            <ButtonList/>


        </div>
    )
}
export default Head