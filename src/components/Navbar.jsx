import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faEye, faGear, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";


export default function Navbar()
{
    const { t } = useTranslation();
    return(
        <>
        <nav className="bg-primary text-neutral hidden h-full md:block md:fixed top-28 left-0">
            <ul className="hidden md:flex flex-col p-8 gap-8 lg:gap-10 lg:text-2xl 2xl:w-74 lg:font-normal">
                <li>
                    <Link to="/" className="focus:text-accent hover:text-accent flex 2xl:flex-row md:flex-col gap-2 lg:gap-4 items-center"> 
                        <FontAwesomeIcon icon={faFilm} className="text-3xl lg:text-4xl"/>
                        {t('watchlist')}
                    </Link>
                </li>
                <li>
                    <Link to="/watched" className="focus:text-accent hover:text-accent flex 2xl:flex-row md:flex-col gap-2 lg:gap-4 items-center"> 
                        <FontAwesomeIcon icon={faEye} className="text-3xl lg:text-4xl" />
                        {t('watched')} 
                    </Link>
                </li>
                <li>
                    <Link to="/favorites" className="focus:text-accent hover:text-accent flex 2xl:flex-row md:flex-col gap-2 lg:gap-4  items-center"> 
                        <FontAwesomeIcon icon={faHeart} className="text-3xl lg:text-4xl" />
                        {t('favorites')}
                    </Link>
                </li>
                <li>
                    <Link to="/settings" className="focus:text-accent hover:text-accent flex 2xl:flex-row md:flex-col gap-2 lg:gap-4  items-center"> 
                        <FontAwesomeIcon icon={faGear} className="text-3xl lg:text-4xl" />
                        {t('settings')} 
                    </Link>
                </li>
            </ul>
        </nav>

        <nav className="md:hidden block fixed bottom-0 left-0 bg-primary text-neutral z-50">
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
                    <FontAwesomeIcon icon={faHeart} className="text-2xl" />
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