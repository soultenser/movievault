import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SearchBar from "./SearchBar";
import AddMovieButton from "./AddMovieButton";
import ProfileButton from "./ProfileButton";

export default function Header() {
    const { t } = useTranslation();

    return (
        <header className="bg-primary p-8 pr-8 md:flex w-full">
            <div className="hidden md:flex justify-between w-full gap-8 items-center">
                <Link to="/" className="text-clear text-3xl md:text-4xl font-semibold"> MOVIEVAULT </Link>
                <SearchBar placeholder={t('search_placeholder')}/>
                <AddMovieButton label={t('add_movie')} />
                <ProfileButton />
            </div>
            <div className="md:hidden w-full">
                <div className="flex justify-between items-center w-full gap-6 md:m-0 mb-4">
                    <Link to="/" className="text-clear text-2xl md:text-4xl font-semibold"> MOVIEVAULT </Link>
                    <AddMovieButton label={t('add_movie')} />
                </div>
                <SearchBar placeholder={t('search_placeholder')}/>
            </div>
        </header>
    );
}