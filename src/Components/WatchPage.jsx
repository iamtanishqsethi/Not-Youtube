import { useEffect } from "react"
import { useDispatch } from "react-redux"
import {closeMenu} from "../Utils/appSlice"
import { useParams, useSearchParams } from "react-router-dom"
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
const WatchPage=()=>{
    const [searchParams]=useSearchParams()//TODO:search about thiss hook
    console.log(searchParams.get("v"))//get video id 
    const dispatch=useDispatch()
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
                        src={"https://www.youtube.com/embed/" + searchParams.get("v")} title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                    </iframe>
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