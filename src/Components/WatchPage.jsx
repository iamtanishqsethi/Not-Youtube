import {useEffect, useState} from "react"
import { useDispatch } from "react-redux"
import {closeMenu} from "../Utils/appSlice"
import { useParams, useSearchParams } from "react-router-dom"
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import useVideoData from "../Utils/useVideoData";

const WatchPage=()=>{
    console.log("rendering...")
    const [searchParams]=useSearchParams()//TODO:search about thiss hook
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(closeMenu())
    },[searchParams.get("v")])
    const videoData=useVideoData(searchParams.get("v"))
    if(!videoData){
        return <h1>Loading.....</h1>
    }
    console.log(videoData)
    const { channelTitle, title } = videoData.snippet || {};
    const { commentCount, likeCount, viewCount } = videoData.statistics || {};

    return(
        <div className="col-span-11 p-5 pt-36 ">
            <div className="flex flex-wrap">
                <div>
                    <iframe
                        className="rounded-lg"
                        width="1000" height="500"
                        src={"https://www.youtube.com/embed/" + searchParams.get("v")+ "?&autoplay=1"} title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                    </iframe>
                    <div className="m-4 px-5 py-3 bg-gray-100 rounded-lg shadow-xl">
                        <h1 className="text-2xl font-bold">{title}</h1>
                        <div className="flex items-center justify-between">
                            <h1 className="font-lg p-2 font-medium">Views: {viewCount}</h1>
                            <h1 className="font-lg p-2 font-medium">Likes: {likeCount}</h1>
                        </div>
                        <h1 className={"font-bold text-xl p-2"}>{channelTitle}</h1>

                    </div>
                </div>
                <div className="">
                    <LiveChat/>
                </div>

            </div>
            <CommentsContainer/>
        </div>
    )
}
export default WatchPage