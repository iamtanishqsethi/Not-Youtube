import {useSelector} from "react-redux";

const Button=({name})=>{
    const dark=useSelector(store=>store.app.dark);
    return (
        <div>
            <button className={`py-1.5 px-4 mx-1.5 ${dark?'bg-zinc-900':'bg-gray-200'} text-sm rounded-lg`}>{name}</button>
        </div>
    )
}
export default Button