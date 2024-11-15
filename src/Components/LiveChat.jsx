import ChatMessage from "./ChatMessage";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addMessage} from "../Utils/chatSlice";
import {generateRandomMessage, generateRandomName} from "../Utils/helper"
const LiveChat=()=>{
    const dispatch = useDispatch();
    const messages=useSelector(store=>store.chat.messages)
    const [liveMessage,setLiveMessage]=useState("")
    const dark=useSelector(store=>store.app.dark);
    useEffect(()=>{
        const interval=setInterval(()=>{
            //api polling
            // console.log("api polling")
            dispatch(addMessage({
                name:generateRandomName(),
                message:generateRandomMessage()
            }))
        },1000)
        return ()=>clearInterval(interval)
    },[])

    return(
        <div className="">
            <h1 className={` mx-4 shadow-xl p-3 rounded-lg  items-center text-center text-lg font-bold `}>Live chat</h1>
            <div
                className={`mx-4  p-4 ${dark?'border-zinc-700 bg-zinc-800':'border-black bg-slate-100'} border-2  h-[380px] rounded-lg  overflow-y-scroll flex flex-col-reverse `}>
                {/*<h1 className="">Live chat</h1>*/}
                <div className="">
                    {
                        messages.map((mes, index) => <ChatMessage key={index} name={mes.name} message={mes.message}/>)
                    }
                </div>
            </div>
            <div className={`  mx-4 shadow-xl p-2 rounded-lg`}>
                <form onSubmit={(e)=>{
                    e.preventDefault()
                    dispatch(addMessage({
                        name:"User",
                        message: liveMessage
                    }))
                    setLiveMessage("")
                }

                }>
                    <input type="text" className={`${dark?'bg-zinc-800 border-zinc-600':'bg-gray-300 border-gray-500'} border-1 w-80  p-1`}
                           value={liveMessage}
                           onChange={
                        (e) => setLiveMessage(e.target.value)
                    }/>
                    <button className={`px-3 py-1 rounded mx-2 ${dark?'bg-zinc-800 ':'bg-gray-300 '}  font-bold`}>Send</button>
                </form>

            </div>
        </div>

    )
}
export default LiveChat