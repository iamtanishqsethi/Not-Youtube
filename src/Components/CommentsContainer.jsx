//nested comments mock data
//similar to old reddit comments
import {useSelector} from "react-redux";

const commentsData=[
    {
        name:"Tanishq",
        text:"lorem ipsum dolor sit amet",
        replies:[
            {
                name:"Tanishq",
                text:"lorem ipsum dolor sit amet",
                replies:[
                    {
                        name:"Tanishq",
                        text:"lorem ipsum dolor sit amet",
                        replies:[]
                    }
                ]
            },
            {
                name:"Tanishq",
                text:"lorem ipsum dolor sit amet",
                replies:[
                    {
                        name:"Tanishq",
                        text:"lorem ipsum dolor sit amet",
                        replies:[
                            {
                                name:"Tanishq",
                                text:"lorem ipsum dolor sit amet",
                                replies:[]
                            }
                        ]
                    }
                ]

            },
            {
                name:"Tanishq",
                text:"lorem ipsum dolor sit amet",
                replies: []
            },
        ]
    },
    {
        name:"Tanishq",
        text:"lorem ipsum dolor sit amet",
        replies: []
    },
    {
        name:"Tanishq",
        text:"lorem ipsum dolor sit amet",
        replies: [
            {
                name:"Tanishq",
                text:"lorem ipsum dolor sit amet",
                replies:[
                    {
                        name:"Tanishq",
                        text:"lorem ipsum dolor sit amet",
                        replies:[
                            {
                                name:"Tanishq",
                                text:"lorem ipsum dolor sit amet",
                                replies:[
                                    {
                                        name:"Tanishq",
                                        text:"lorem ipsum dolor sit amet",
                                        replies:[]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },{
        name:"Tanishq",
        text:"lorem ipsum dolor sit amet",
        replies: []
    }
]

const Comment=({data})=>{
    const {name,text,replies}=data;
    const dark=useSelector(store=>store.app.dark);
    return <div className={`flex ${dark?'bg-zinc-800':'bg-gray-200'} p-1.5 rounded my-2`}>
        <img
            className="w-12 p-3"
            src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="user img"/>
        <div>
            <p className="font-bold">{name}</p>
            <p>{text}</p>
        </div>
    </div>
}
const CommentsList=({comments})=>{
    return(
        comments.map((comment,index)=>{
            return (
            <div>
                <Comment key={index} data={comment}/>
                    <div className="pl-4 border-l-2 border-gray-700 ml-5">
                        <CommentsList comments={comment.replies}/>{/*recursive component for nested comments*/}

                    </div>
            </div>
            )
        }))

}
const CommentsContainer=()=>{
    return (
        <div className="m-5 p-2 w-3/5">
            <h1 className="text-2xl font-bold">Comments:</h1>
            {/*<Comment data={commentsData[0]}/>*/}
            <CommentsList comments={commentsData}/>
        </div>
    )
}
export default CommentsContainer