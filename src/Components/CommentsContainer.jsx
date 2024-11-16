//nested comments mock data
//similar to old reddit comments
import {useSelector} from "react-redux";

const commentsData = [
    {
        name: "Alice Johnson",
        text: "This video was really insightful, thank you!",
        replies: [
            {
                name: "Bob Smith",
                text: "I agree, it's very helpful.",
                replies: [
                    {
                        name: "Charlie Adams",
                        text: "Glad you found it useful!",
                        replies: []
                    }
                ]
            },
            {
                name: "David Brown",
                text: "Can anyone clarify the second point?",
                replies: [
                    {
                        name: "Eve Williams",
                        text: "Sure, the second point is about prioritizing tasks effectively.",
                        replies: [
                            {
                                name: "Frank Harris",
                                text: "That really helped, thanks!",
                                replies: []
                            }
                        ]
                    }
                ]
            },
            {
                name: "Grace Clark",
                text: "Amazing content as always!",
                replies: []
            }
        ]
    },
    {
        name: "Hannah Lee",
        text: "Does anyone know when the next part is coming?",
        replies: []
    },
    {
        name: "Ian Scott",
        text: "This is exactly what I was looking for. Subscribed!",
        replies: [
            {
                name: "Jessica Taylor",
                text: "Me too! This creator is so underrated.",
                replies: [
                    {
                        name: "Kevin Moore",
                        text: "Totally agree. Quality content right here.",
                        replies: [
                            {
                                name: "Laura White",
                                text: "The editing is also top-notch!",
                                replies: [
                                    {
                                        name: "Michael Turner",
                                        text: "Absolutely, professional-grade stuff!",
                                        replies: []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "Natalie King",
        text: "Loved it! Keep up the great work!",
        replies: []
    }
];

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