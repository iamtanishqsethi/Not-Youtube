const ChatMessage=({name,message})=>{
    return(
        <div className="flex items-center p-1  shadow rounded-lg">
            <img
                className="w-12 p-3 "
                src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
                alt="user img"/>
            <span className="font-bold text-gray-600">{name}</span>
            <span className="text-sm px-2">{message}</span>
        </div>
    )
}
export default ChatMessage;