import {useEffect, useState} from "react";

const useChannelData=(channelId)=>{
    const [channelData,setChannelData]=useState(null);
    const getChannelData=async (channelId)=>{
        const data= await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${process.env.REACT_APP_KEY2}`)
        const json = await data.json()
        setChannelData(json?.items[0])
    }
    useEffect(() => {
        getChannelData(channelId)
    }, []);
    return channelData;
}
export default useChannelData;