import FlexContainer from "../components/watchlist-box/FlexContainer"
import MovieCard from "../components/watchlist-box/MovieCard"
import { useMovieDB } from "../hooks/useMovieDB"
import { useState, useEffect } from "react";

export default function Home() {

	const { getAllMovies } = useMovieDB();
	const [movies, setMovies] = useState([]);

	useEffect(() => {

		async function load() {
    		const data = await getAllMovies("toWatch");
    		setMovies(data);
		}
		load();
		
	},[]);

	return (
    	<div className="pr-4 pl-4 md:pr-0 md:pl-0 lg:flex lg:gap-8">
			<FlexContainer>
				{movies.map(movie => (
					<MovieCard movie={movie} key={movie.id} />
				))}
			</FlexContainer>
			<aside className="bg-panel w-2/5 rounded-2xl hidden xl:block">

			</aside>
		</div>
	);
}