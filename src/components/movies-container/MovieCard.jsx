import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import MultiButton from "./MultiButton";
import { useTranslation } from "react-i18next";


export default function MovieCard({movie}) {
    const { t } = useTranslation();

    return (
        <>
        {/*   DESKTOP   */}
        <div className="hidden md:block bg-transparent p-6" key={movie.id}>
            {movie.poster_path && (
                <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className="rounded-2xl w-full min-w-32 md:w-64 lg:w-70 object-cover" 
                    />
                )
            }
            <h2 className="text-clear text-2xl mt-4 mb-2">{movie.title}</h2>
            <p className="text-clear mb-1">{movie.release_date}</p>
            
            <div className="w-full flex items-center gap-2 mb-4">
			    <FontAwesomeIcon icon={faStar} className="text-accent"/>
			    <p className="text-neutral">
				    {movie.vote_average?.toFixed(1)}
			    </p>
		    </div>
            <MultiButton label={t("detail_button")}/>
        </div>

        {/*   MOBILE   */}

        <div
        className="md:hidden bg-panel/60 shadow-md rounded-3xl flex w-full p-6 gap-4" key={movie}
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
                    <h2 className="text-clear text-xl mt-2 mb-1">{movie.title}</h2>
                    <p className="text-clear mb-1">{movie.release_date}</p>

                    <div className="w-full flex items-center gap-2 mb-1">
                        <FontAwesomeIcon icon={faStar} className="text-accent"/>
                        <p className="text-neutral">
                            {movie.vote_average?.toFixed(1)}
                        </p>
                    </div>
                </div>
            <MultiButton label={t("detail_button")}/>
            </div>
        </div>
        </>
    );
}