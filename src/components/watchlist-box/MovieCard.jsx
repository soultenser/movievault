import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function MovieCard({movie}) {

    return (
        <>
        {/*   DESKTOP   */}
        <div className="hidden md:block bg-panel p-6" >
            {movie.poster_path && (
                <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className="rounded-2xl w-full min-w-32 md:w-64 lg:w-70 object-cover" 
                    />
                )
            }
            <h2 className="text-clear text-2xl mt-2 mb-4">{movie.title}</h2>
            
            <div className="w-full flex items-center gap-2 mb-1">
			    <FontAwesomeIcon icon={faStar} className="text-accent"/>
			    <p className="text-neutral">
				    {movie.vote_average?.toFixed(1)}
			    </p>
		    </div>
        </div>

        {/*   MOBILE   */}

        <div className="md:hidden bg-panel shadow-md rounded-3xl flex w-full p-6 gap-4">
            {movie.poster_path && (
                <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className="rounded-2xl w-32 object-cover" 
                    />
                )
            }
            <div className="flex flex-col">
                <h2 className="text-clear text-xl mt-2 mb-4">{movie.title}</h2>

                <div className="w-full flex items-center gap-2 mb-1">
			        <FontAwesomeIcon icon={faStar} className="text-accent"/>
			        <p className="text-neutral">
				        {movie.vote_average?.toFixed(1)}
			        </p>
		        </div>
            </div>
        </div>
        </>
    );
}