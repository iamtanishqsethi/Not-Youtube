import { useEffect } from "react"
import { useDispatch } from "react-redux"
import {closeMenu} from "../Utils/appSlice"
import { useParams, useSearchParams } from "react-router-dom"
const WatchPage=()=>{
    const [searchParams]=useSearchParams()//TODO:search about thiss hook
    console.log(searchParams.get("v"))//get video id 
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(closeMenu())
    },[])
    return(
        <div className="col-span-11 p-5 ">  
            <iframe
            className="rounded-lg"
            width="1000" height="500" src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    )
}
export default WatchPage