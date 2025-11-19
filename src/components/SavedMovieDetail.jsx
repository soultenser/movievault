import MultiButton from "./buttons/MultiButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faHeart, faEye, faEyeSlash, faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { useMovieDB } from "../hooks/useMovieDB";
import { useState, useEffect } from "react";

export default function SavedMovieDetail({ movie, onClose, store }) {

    const {removeFromAll, removeMovie, addMovie, getMovie} = useMovieDB();
    const {t} = useTranslation();
    const [isWatched, setIsWatched] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {

        async function checkStatus() {
            const checkedWatch = await getMovie("watched", movie.id);
            const checkedFav = await getMovie("favorites", movie.id)

            setIsWatched(Boolean(checkedWatch));
            setIsFavorite(Boolean(checkedFav));
        }

        checkStatus();
    }, [movie.id, getMovie]);

  return (
    <div className="text-clear w-full flex flex-col items-center">
        <div className="w-full">
            <button
                onClick={onClose}
                className="text-accent flex items-center w-10 h-10 justify-center
                bg-neutral/20 hover:bg-neutral/40 active:bg-neutral/40 
                sm:active:bg-neutral/10 shadow-md
                active:shadow-none
                rounded-full text-2xl leading-none"
                aria-label="Close"
            >
                ×
            </button>
        </div>

        <h2 className="text-2xl mb-4 mt-6 font-semibold w-full">{movie.title}</h2>

        <img 
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.alt} 
            className="w-64 lg:w-full aspect-1/1.5 object-cover rounded-2xl"
        />

        <p className="text-neutral mt-4 text-sm w-full">{movie.overview}</p>

        <div className="w-full mt-6 flex flex-col gap-4">
            {
                !isWatched && 
                <MultiButton label={<div 
                    className="w-full h-full flex items-center gap-2 justify-center hover:text-accent"
                    > 
                    <FontAwesomeIcon className="text-xl" icon={faEye}/> {t("watched")} </div>} onClick={() => {
                     addMovie("watched", movie); 
                     removeMovie("toWatch", movie.id);
                     setIsWatched(true);
                }}/> 
            }

            {
                isWatched && 
                <MultiButton label={<div 
                    className="w-full h-full flex items-center gap-2 justify-center hover:text-accent"
                    > 
                    <FontAwesomeIcon className="text-xl" icon={faEyeSlash}/> {t("watched")} </div>} onClick={() => {
                    removeMovie("watched", movie.id);
                    addMovie("toWatch", movie);
                    setIsWatched(false);
                }}/>
            }

            {
                !isFavorite && 
                <MultiButton label={<div 
                    className="w-full h-full flex items-center gap-2 justify-center hover:text-accent"
                    > 
                    <FontAwesomeIcon className="text-xl" icon={faHeart}/> {t("favorites")} </div>} onClick={() => {
                    addMovie("favorites", movie);
                    setIsFavorite(true);
                }}/>
            }

            {
                isFavorite && 
                <MultiButton label={<div 
                    className="w-full h-full flex items-center gap-2 justify-center hover:text-accent"
                    > 
                    <FontAwesomeIcon className="text-xl" icon={faHeartBroken}/> {t("favorites")} </div>} onClick={() => {
                    removeMovie("favorites", movie.id);
                    setIsFavorite(false);
                }}/>
            }

            <MultiButton 
                label={<div className="w-full h-full flex items-center gap-2 justify-center hover:text-accent"> <FontAwesomeIcon className="text-xl" icon={faTrash}/> {t("remove")} </div>} 
                onClick={() => removeFromAll(movie.id)} 
            />
        </div>
    </div>
  );
}