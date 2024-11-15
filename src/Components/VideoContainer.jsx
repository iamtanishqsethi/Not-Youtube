import { useEffect, useState } from "react"
import {YOUTUBE_VIDEOS_API} from "../Utils/constants"
import VideoCard from "./VideoCard"
import {Link} from "react-router-dom"
import Shimmer from "./Shimmer";
import {useSelector} from "react-redux";
const VideoContainer=()=>{
    const [videos,setVideos]=useState([])
    const dark=useSelector(store=>store.app.dark);
    const getVideos=async()=>{

        
        const data= await fetch(YOUTUBE_VIDEOS_API)
        const json=await data.json()
        // console.log(json)
        setVideos(json?.items)
    }
    useEffect(()=>{
        getVideos()
    },[])
    if(videos?.length===0){
        return(
                <div className={`flex flex-wrap items-center justify-center ${dark?'bg-black':'bg-white'}`}>
                <Shimmer/>
                <Shimmer/>
                <Shimmer/>
                <Shimmer/>
                <Shimmer/>
                <Shimmer/>
                <Shimmer/>
                <Shimmer/>
                <Shimmer/>
            </div>
        )
    }
    return (
        <div className={`flex flex-wrap items-center justify-center ${dark?'bg-black':'bg-white'}`}>
            {videos?.map((video,index)=><Link to={"/watch?v="+ video?.id} key= {video?.id}><VideoCard  info={videos[index]}/></Link>)}
            </div>
    )
}
export default VideoContainer