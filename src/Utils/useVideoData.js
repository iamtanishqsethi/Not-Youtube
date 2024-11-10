import {useEffect, useState} from "react";

const useVideoData=(videoId)=>{
    const [data,setData]=useState([]);
    const getVideoData=async ()=>{
        const data=await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${process.env.REACT_APP_KEY}`)
        const json=await data.json()
        setData(json?.items[0])
    }
    useEffect(()=>{
        getVideoData()
    })
    return data;
}
export default useVideoData;