import { useSelector } from "react-redux"
import {Link} from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCameraRetro, faFilm, faGamepad, faHouse, faMedal, faMusic, faVideo} from "@fortawesome/free-solid-svg-icons";
const SideBar=()=>{
    const isOpen=useSelector((store)=>store.app.isMenuOpen)
    const dark=useSelector(store=>store.app.dark);
    return isOpen && (//this is known as early return pattern
        <div className={`px-10 py-10  shadow-xl  ${dark?'shadow-zinc-500':'shadow-black'} rounded sticky top-36 h-screen cursor-pointer `}>
            <ul>
                <li className="font-medium text-lg"><Link to="/"><FontAwesomeIcon icon={faHouse} className="px-2"/>Home</Link></li>
                <li className="font-medium text-lg"><FontAwesomeIcon icon={faVideo} className="px-2"/>Videos</li>
                <li className="font-medium text-lg"><FontAwesomeIcon icon={faCameraRetro} className="px-2"/>Live</li>
            </ul>
            <h1 className="font-medium pt-5 text-lg">Subscription</h1>
            <ul>
                <li className=""><FontAwesomeIcon icon={faMusic} className={'px-2'}/>Music</li>
                <li className=""><FontAwesomeIcon icon={faMedal} className={'px-2'}/>Sports</li>
                <li className=""><FontAwesomeIcon icon={faGamepad} className="px-2"/>Gaming</li>
                <li className=""><FontAwesomeIcon icon={faFilm} className="px-2"/>Movies</li>
            </ul>
            <h1 className="font-medium pt-5">Watch Later</h1>
            <ul>
                <li className=""><FontAwesomeIcon icon={faMusic} className={'px-2'}/>Music</li>
                <li className=""><FontAwesomeIcon icon={faMedal} className={'px-2'}/>Sports</li>
                <li className=""><FontAwesomeIcon icon={faGamepad} className="px-2"/>Gaming</li>
                <li className=""><FontAwesomeIcon icon={faFilm} className="px-2"/>Movies</li>
            </ul>
        </div>
    )
}
export default SideBar