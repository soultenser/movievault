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
        <>
        <nav className="bg-primary text-neutral hidden h-full md:block md:fixed top-30 left-0">
            <ul className="hidden md:flex flex-col p-8 gap-8 text-xl w-74">
                <li>
                    <Link to="/" className="focus:text-accent hover:text-accent flex items-center"> 
                    <FontAwesomeIcon icon={faFilm} className="mr-4 text-3xl"/>
                    {t('watchlist')}
                    </Link>
                </li>
                <li>
                    <Link to="/watched" className="focus:text-accent hover:text-accent flex items-center"> 
                    <FontAwesomeIcon icon={faEye} className="mr-4 text-3xl" />
                    {t('watched')} 
                    </Link>
                </li>
                <li>
                    <Link to="/favorites" className="focus:text-accent hover:text-accent flex items-center"> 
                    <FontAwesomeIcon icon={faStar} className="mr-4 text-3xl" />
                    {t('favorites')}
                    </Link>
                </li>
                <li>
                    <Link to="/settings" className="focus:text-accent hover:text-accent flex items-center"> 
                    <FontAwesomeIcon icon={faGear} className="mr-4 text-3xl" />
                    {t('settings')} 
                    </Link>
                </li>
            </ul>
        </nav>

        <nav className="md:hidden block fixed bottom-0 left-0 bg-primary text-neutral border-2 border-accent">
            <ul className="grid grid-cols-4 md:hidden fixed bottom-0 left-0 bg-primary w-full p-4 text-sm">
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
        </>
    );
}