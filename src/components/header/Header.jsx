import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import SearchBar from "./SearchBar";
import AddMovieButton from "../AddMovieButton";
import AddMovieModal from "../AddMovieModal";

export default function Header() {
    const { t } = useTranslation();

    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <header className="bg-primary p-8 pr-8 md:flex w-full">
            <div className="hidden md:flex h-25 pl-8 pr-8 justify-between w-full gap-8 items-center fixed top-0 left-0 bg-primary">
                <Link to="/" className="text-clear text-3xl lg:text-4xl font-semibold lg:mr-4"> MOVIEVAULT </Link>
                <SearchBar placeholder={t('search_placeholder')}/>
                <AddMovieButton label={t('add_movie')} onClick={() => setModalOpen(true)}/>
            </div>
            <div className="md:hidden w-full">
                <div className="flex justify-between items-center w-full gap-6 md:m-0 mb-6">
                    <Link to="/" className="text-clear text-2xl sm:text-3xl md:text-4xl font-semibold"> MOVIEVAULT </Link>
                    <AddMovieButton label={t('add_movie')} onClick={() => setModalOpen(true)}/>
                </div>
                <SearchBar placeholder={t('search_placeholder')} />
            </div>

            <AddMovieModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </header>
    );
}