import FlexContainer from "../components/watchlist-box/FlexContainer"
import MovieCard from "../components/watchlist-box/MovieCard"
import { useMovieDB } from "../hooks/useMovieDB"
import { useState, useEffect } from "react";

export default function Home() {

	const { getAllMovies } = useMovieDB();
	const {movies, setMovies} = useState([]);

	useEffect(() => {

		async function load() {
			const data = await getAllMovies();
			setMovies(data);
		}
		load();
	},[]);

	return (
    	<div className="">
			<FlexContainer>
				{movies.map(movie => (
					<MovieCard movie={movie} key={movie.id} />
				))}
			</FlexContainer>
		</div>
	);
}