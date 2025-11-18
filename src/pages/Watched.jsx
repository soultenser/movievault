
import { useMovieDB } from "../hooks/useMovieDB"
import { useState, useEffect } from "react";

export default function Watched()
{
	const { getAllMovies } = useMovieDB();
	const [movies, setMovies] = useState([]);

	useEffect(() => {

		async function load() {
			const data = await getAllMovies("watched");
			setMovies(data);
		}
		load();
		
	},[]);

	return (
		<div className="pr-4 pl-4 md:pr-0 md:pl-0 lg:flex lg:gap-8">

		</div>
	);
}