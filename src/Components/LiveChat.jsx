import ChatMessage from "./ChatMessage";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addMessage} from "../Utils/chatSlice";
import {generateRandomMessage, generateRandomName} from "../Utils/helper"
const LiveChat=()=>{
    const dispatch = useDispatch();
    const messages=useSelector(store=>store.chat.messages)
    const [liveMessage,setLiveMessage]=useState("")
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
            <h1 className="mx-4 shadow-xl p-3 rounded-lg  items-center text-center text-lg font-bold ">Live chat</h1>
            <div
                className="mx-4  p-4 border-black border-2  h-[380px] rounded-lg bg-slate-100 overflow-y-scroll flex flex-col-reverse ">
                {/*<h1 className="">Live chat</h1>*/}
                <div className="">
                    {
                        messages.map((mes, index) => <ChatMessage key={index} name={mes.name} message={mes.message}/>)
                    }
                </div>
            </div>
            <div className="border-black border-2 mx-4 shadow-xl p-2 rounded-lg">
                <form onSubmit={(e)=>{
                    e.preventDefault()
                    dispatch(addMessage({
                        name:"User",
                        message: liveMessage
                    }))
                    setLiveMessage("")
                }

                }>
                    <input type="text" className="w-80  p-1"
                           value={liveMessage}
                           onChange={
                        (e) => setLiveMessage(e.target.value)
                    }/>
                    <button className="px-3 py-0.5 mx-2 bg-gray-300 font-bold">Send</button>
                </form>

            </div>
        </div>

    )
}
export default LiveChat