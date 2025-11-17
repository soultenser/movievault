import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { getMovieDetails } from "../api/tmdb"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopwatch, faCalendar, faStar } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import  { useMovieDB }  from "../hooks/useMovieDB";
import AddMovieButton from "../components/AddMovieButton";

export default function MovieDetail() {
  const { id } = useParams();
  const { t } = useTranslation();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const { addMovie } = useMovieDB();

  useEffect(() => {
    const loadMovie = async () => {
      const data = await getMovieDetails(id, t("api_language"));
      if (!data) setError("Impossibile caricare i dettagli del film.");
      else setMovie(data);
    };
    loadMovie();
  }, [id]);

  if (error) return <p className="text-red-500 p-4">{error}</p>;
  if (!movie) return <p className="text-neutral-400 p-4">Caricamento...</p>;

  return (
	/* DESKTOP */
    <div className="p-8.5 pt-4 md:p-0 text-clear w-full mx-auto">
      <div className="hidden md:flex flex-col md:flex-row gap-6 w-full">
        {movie.poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="rounded-2xl w-70 object-cover"
          />
        )}
        <div className="w-full">
          <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
          <p className="text-neutral-400 mb-4 italic">{movie.tagline}</p>
          <p className="mb-4">{movie.overview}</p>

		  <div className="w-full flex items-center gap-4">
			<FontAwesomeIcon icon={faStar} className="text-accent"/>
			<p className="text-md text-neutral">
				{movie.vote_average?.toFixed(1)} / 10 ({movie.vote_count} {t("votes")})
			</p>
		  </div>

		  <div className="w-full flex items-center gap-4">
			<FontAwesomeIcon icon={faCalendar} className="text-accent"/>
			<p className="text-md text-neutral">
				{movie.release_date}
			</p>
		  </div>

		  <div className="w-full flex items-center gap-4">
			<FontAwesomeIcon icon={faStopwatch} className="text-accent"/>
			<p className="text-md text-neutral">
				{movie.runtime} min
			</p>
		  </div>

			<div className="mt-4 w-full">
				<p>{ t("genres") }</p>
				<div className="flex gap-2 mt-2 text-sm">
					{movie.genres.map((genre) => {
						return (
						<div className="bg-panel rounded-xl p-2 shadow-md">
							<p>{ genre.name }</p>
						</div>
						)
					})}
				</div>
			</div>
        </div>
      </div>

	  {/* MOBILE */}
	  <div className="md:hidden flex flex-col md:flex-row items-center gap-6">

		<div className="w-full flex flex-col items-start">
			<h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
          	<p className="text-neutral-400 mb-4 italic">{movie.tagline}</p>
		</div>

        {movie.poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="rounded-2xl w-64 object-cover"
          />
        )}

        <div className="w-full">
          <p className="mb-4">{movie.overview}</p>

		  <div className="w-full flex items-center gap-3 mb-1">
			<FontAwesomeIcon icon={faStar} className="text-accent"/>
			<p className="text-sm text-neutral">
				{movie.vote_average?.toFixed(1)} / 10 ({movie.vote_count} {t("votes")})
			</p>
		  </div>

		  <div className="w-full flex items-center gap-3 mb-1">
			<FontAwesomeIcon icon={faCalendar} className="text-accent"/>
			<p className="text-sm text-neutral">
				{movie.release_date}
			</p>
		  </div>

		  <div className="w-full flex items-center gap-3 mb-1">
			<FontAwesomeIcon icon={faStopwatch} className="text-accent"/>
			<p className="text-sm text-neutral">
				{movie.runtime} min
			</p>
		  </div>

		  	<div className="mt-4 w-full mb-4">
				<p className="text-sm">{ t("genres") }</p>
				<div className="flex gap-2 mt-2 text-xs">
					{movie.genres.map((genre) => {
						return (
						<div className="bg-panel rounded-xl p-2 shadow-md">
							<p>{ genre.name }</p>
						</div>
						)
					})}
				</div>
			</div>
    	</div>
    </div>
	  	<div className="w-full flex items-center justify-center mt-4 md:mt-8">
			<AddMovieButton 
				onClick={() => addMovie('toWatch', movie)}
				label={t("add_watchlist")} 
				className="bg-panel hover:bg-panel/60 active:bg-panel active:shadow-none sm:active:bg-panel p-4 w-full lg:w-3xl rounded-xl shadow-md flex items-center justify-center gap-2"
			/>
		</div>
    </div>
  );
}