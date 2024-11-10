import { useEffect } from "react"
import { useDispatch } from "react-redux"
import {closeMenu} from "../Utils/appSlice"
import { useParams, useSearchParams } from "react-router-dom"
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import useVideoData from "../Utils/useVideoData";

const WatchPage=()=>{
    const [searchParams]=useSearchParams()//TODO:search about thiss hook
    const dispatch=useDispatch()
    const videoData=useVideoData(searchParams.get("v"))
    const{
        channelTitle,title
    }=videoData?.snippet
    const {commentCount,
        likeCount,viewCount}=videoData?.statistics

    useEffect(()=>{
        dispatch(closeMenu())

    },[])
    return(
        <div className="col-span-11 p-5 pt-36 ">
            <div className="flex flex-wrap">
                <div>
                    <iframe
                        className="rounded-lg"
                        width="1000" height="500"
                        src={"https://www.youtube.com/embed/" + searchParams.get("v")+ "?&autoplay=1&loop=1&playlist="+searchParams.get("v")} title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                    </iframe>
                    <div>
                        <h1>{title}</h1>
                        <div>
                            <h1>Views:{viewCount}</h1>
                            <h1>Likes:{likeCount}</h1>
                        </div>
                        <h1>{channelTitle}</h1>

                    </div>
                </div>
                <div className="">
                    {/*<LiveChat/>*/}
                </div>

            </div>
            <CommentsContainer/>
        </div>
    )
}
export default WatchPage