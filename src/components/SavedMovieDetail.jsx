import MultiButton from "./MultiButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faHeart, } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { useMovieDB } from "../hooks/useMovieDB";

export default function SavedMovieDetail({ movie, onClose, store }) {

    const {removeMovie} = useMovieDB();
    const {t} = useTranslation();

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

        <div className="w-full mt-6">
            <MultiButton label={<> <FontAwesomeIcon icon={faTrash}/> {t("remove")} </>} onClick={() => removeMovie(store, movie.id)} />
        </div>
    </div>
  );
}