import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import MultiButton from "./buttons/MultiButton";
import { useTranslation } from "react-i18next";


export default function MovieCard({movie, onOpen}) {
    const { t } = useTranslation();
    return (
        <>
        {/*   DESKTOP   */}
        <div className="hidden md:block bg-panel rounded-2xl p-4" key={movie.id}>
            {movie.poster_path && (
                <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className="rounded-2xl w-full md:w-64 lg:w-70 object-cover aspect-1/1.5" 
                    />
                )
            }
            <h2 className="text-clear text-2xl mt-4 truncate">{movie.title}</h2>
            <p className="mb-2 text-neutral">{movie.release_date.split('-')[0]}</p>
            
            <div className="w-full flex items-center gap-2 mb-4">
			    <FontAwesomeIcon icon={faStar} className="text-accent"/>
			    <p className="text-neutral">
				    {movie.vote_average?.toFixed(1)}
			    </p>
		    </div>

            <MultiButton label={t("detail_button")} onClick={() => onOpen(movie)}/>
        </div>

        {/*   MOBILE   */}

        <div
        className="md:hidden bg-panel shadow-md rounded-3xl flex w-full p-6 gap-4" key={movie}
        >
            {movie.poster_path && (
                <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className="rounded-2xl w-32 object-cover" 
                    />
                )
            }
            <div className="flex flex-col w-full justify-between">
                <div>
                    <h2 className="text-clear text-md">{movie.title}</h2>
                    <p className=" text-sm mb-2 text-neutral">{movie.release_date.split('-')[0]}</p>

                    <div className="w-full flex items-center gap-1 mb-4">
                        <FontAwesomeIcon icon={faStar} className="text-accent text-xs"/>
                        <p className="text-neutral text-sm">
                            {movie.vote_average?.toFixed(1)}
                        </p>
                    </div>
                </div>

                <div>
                    <MultiButton label={t("detail_button")} onClick={() => onOpen(movie)}/>
                </div>
            </div>
        </div>
        </>
    );
}