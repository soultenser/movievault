import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function MovieCard({movie}) {

    return (
        <div className="bg-primary" >
            {movie.poster_path && (
                    <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className="rounded-2xl w-64 object-cover" 
                    />
                )
            }
            <h2>{movie.title}</h2>
            <div className="w-full flex items-center gap-3 mb-1">
			    <FontAwesomeIcon icon={faStar} className="text-accent"/>
			    <p className="text-sm text-neutral">
				    {movie.vote_average?.toFixed(1)} / 10 ({movie.vote_count} {t("votes")})
			    </p>
		  </div>
        </div>
    );
}