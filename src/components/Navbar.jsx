import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";


export default function Navbar()
{
    const { t } = useTranslation();
    return(
        <nav className="bg-primary text-neutral">
            <ul className="hidden md:flex flex-col p-8 gap-4 text-2xl w-75">
                <li>
                    <Link to="/" className="focus:text-accent hover:text-accent"> 
                    <FontAwesomeIcon icon={faFilm} className="mr-4"/>
                    {t('watchlist')}
                    </Link>
                </li>
                <li>
                    <Link to="/watched" className="focus:text-accent hover:text-accent"> 
                    <FontAwesomeIcon icon={faEye} className="mr-4" />
                    {t('watched')} 
                    </Link>
                </li>
                <li>
                    <Link to="/favorites" className="focus:text-accent hover:text-accent"> 
                    <FontAwesomeIcon icon={faStar} className="mr-4" />
                    {t('favorites')}
                    </Link>
                </li>
                <li>
                    <Link to="/settings" className="focus:text-accent hover:text-accent"> 
                    <FontAwesomeIcon icon={faGear} className="mr-4" />
                    {t('settings')} 
                    </Link>
                </li>
            </ul>

            <ul className="flex md:hidden justify-around gap-2 fixed bottom-0 left-0 bg-primary w-full p-4 text-sm">
                <li>
                    <Link to="/" className="focus:text-accent hover:text-accent flex flex-col text-center justify-center items-center gap-2"> 
                    <FontAwesomeIcon icon={faFilm} className="text-2xl "/>                    
                    {t('watchlist')}
                    </Link>
                </li>
                <li>
                    <Link to="/watched" className="focus:text-accent hover:text-accent text-center flex flex-col justify-center items-center gap-2"> 
                    <FontAwesomeIcon icon={faEye} className="text-2xl" />
                    {t('watched')}
                    </Link>
                </li>
                <li>
                    <Link to="/favorites" className="focus:text-accent hover:text-accent text-center flex flex-col justify-center items-center gap-2"> 
                    <FontAwesomeIcon icon={faStar} className="text-2xl" />
                    {t('favorites')}
                    </Link>
                </li>
                <li>
                    <Link to="/settings" className="focus:text-accent hover:text-accent text-center flex flex-col justify-center items-center gap-2"> 
                    <FontAwesomeIcon icon={faGear} className="text-2xl" />
                    {t('settings')}
                    </Link>
                </li>
            </ul>
        </nav>
    );
}