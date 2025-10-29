import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";

export default function Navbar()
{
    return(
        <nav className="bg-primary text-neutral">
            <ul className="hidden md:flex flex-col p-8 gap-4 text-2xl">
                <li>
                    <Link to="/" className="focus:text-accent hover:text-accent"> 
                    <FontAwesomeIcon icon={faFilm} className="mr-4"/>
                    Watchlist 
                    </Link>
                </li>
                <li>
                    <Link to="/watched" className="focus:text-accent hover:text-accent"> 
                    <FontAwesomeIcon icon={faEye} className="mr-4" />
                    Watched </Link>
                </li>
                <li>
                    <Link to="/favorites" className="focus:text-accent hover:text-accent"> 
                    <FontAwesomeIcon icon={faStar} className="mr-4" />
                    Favorites
                    </Link>
                </li>
                <li>
                    <Link to="/settings" className="focus:text-accent hover:text-accent"> 
                    <FontAwesomeIcon icon={faGear} className="mr-4" />
                    Settings 
                    </Link>
                </li>
            </ul>

            <ul className="flex md:hidden justify-around gap-2 fixed bottom-0 left-0 bg-primary w-full p-4 text-sm">
                <li>
                    <Link to="/" className="focus:text-accent hover:text-accent flex flex-col text-center justify-center items-center gap-2"> 
                    <FontAwesomeIcon icon={faFilm} className="text-2xl "/>                    
                    Watchlist 
                    </Link>
                </li>
                <li>
                    <Link to="/watched" className="focus:text-accent hover:text-accent text-center flex flex-col justify-center items-center gap-2"> 
                    <FontAwesomeIcon icon={faEye} className="text-2xl" />
                    Watched 
                    </Link>
                </li>
                <li>
                    <Link to="/favorites" className="focus:text-accent hover:text-accent text-center flex flex-col justify-center items-center gap-2"> 
                    <FontAwesomeIcon icon={faStar} className="text-2xl" />
                    Favorites
                    </Link>
                </li>
                <li>
                    <Link to="/settings" className="focus:text-accent hover:text-accent text-center flex flex-col justify-center items-center gap-2"> 
                    <FontAwesomeIcon icon={faGear} className="text-2xl" />
                    Settings 
                    </Link>
                </li>
            </ul>
        </nav>
    );
}