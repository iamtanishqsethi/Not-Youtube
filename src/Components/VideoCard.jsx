const VideoCard=({info})=>{
    if(!info){
        return null
    }
    const {snippet,statistics}=info
    // console.log(snippet)
    const{channelTitle,title,thumbnails}=snippet
    const{viewCount}=statistics
    
    return (
        <div className="transition ease-in-out p-2 m-2 w-72 bg-gray-100 rounded-lg shadow-lg h-[320px] hover:bg-gray-200">
            <img src={thumbnails.medium.url} alt="thumbnail" className="rounded-lg"/>
            <ul className="">
                <li className="font-medium py-2">{title}</li>
                <li className="text-sm">{channelTitle}</li>
                <li className="text-sm">Views {viewCount}</li>
            </ul>
        </div> 
    )
}

//higher order component 
const RedBorder=(VideoCard)=>{
    return ()=>{
        return(
        <div>
            <VideoCard/>
        </div>
        )
    }
}


export default VideoCard