const VideoCard=({info})=>{
    if(!info){
        return null
    }
    const {snippet,statistics}=info
    // console.log(snippet)
    const{channelTitle,title,thumbnails}=snippet
    const{viewCount}=statistics
    
    return (
        <div className="p-2 m-2 w-72 bg-gray-200 rounded-lg shadow-lg">
            <img src={thumbnails.medium.url} alt="thumbnail" className="rounded-lg"/>
            <ul className="">
                <li className="font-bold py-2">{title}</li>
                <li className="text-sm">{channelTitle}</li>
                <li className="text-sm">Views {viewCount}</li>
            </ul>
        </div> 
    )
}
export default VideoCard