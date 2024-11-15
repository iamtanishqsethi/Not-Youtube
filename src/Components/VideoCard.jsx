import useChannelData from "../Utils/useChannelData";
import formatNumber from "../Utils/formatNumber";

const VideoCard=({info})=>{

    const {snippet,statistics}=info
    // console.log(snippet)
    let{channelTitle,title,thumbnails,channelId}=snippet
    let{viewCount}=statistics
    if(title.length>50){
        title=title.substring(0,60)+"..."
    }
    const channelData=useChannelData(channelId)
    viewCount=formatNumber(viewCount)

    return (
        <div className="transition ease-in-out p-2 m-2 w-[20rem]  rounded-lg  h-[320px]">
            <img src={thumbnails.medium.url} alt="thumbnail" className="rounded-lg"/>
            <ul className="py-1">
                <div className="flex items-start ">
                    <img src={channelData?.snippet?.thumbnails?.high?.url} className="w-9 h-9 rounded-full m-2 mt-3" alt=""/>
                    <div>
                        <li className="font-medium pt-2">{title}</li>
                        <li className="text-sm font-medium text-gray-700">{channelTitle}</li>
                        <li className="text-sm font-medium text-gray-700">{viewCount} Views </li>
                    </div>

                </div>


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