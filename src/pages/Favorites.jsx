import PageLayout from "../components/PageLayout";
import MovieCard from "../components/MovieCard";
import SavedMovieDetail from "../components/SavedMovieDetail";
import { useMovieDB } from "../hooks/useMovieDB"
import { useState, useEffect } from "react";

export default function Favorites()
{
	const { getAllMovies } = useMovieDB();
	const [movies, setMovies] = useState([]);

	const [detailOpen, setDetailOpen] = useState(false);
	const [selected, setSelected] = useState(null);

	const openDetail = (movie) => {
	setSelected(movie);
	setDetailOpen(true);
	};

	useEffect(() => {

		async function load() {
			const data = await getAllMovies("favorites");
			setMovies(data);
		}
		load();
		
	}, [movies]);

		return (
			<PageLayout
				detailOpen={detailOpen}
				detailContent={
					selected && (
						<SavedMovieDetail movie={selected} onClose={() => setDetailOpen(false)} store="watched" />
					)
				}
			>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 p-8 md:p-0">
				{movies.map((movie) => (
					<MovieCard key={movie.id} movie={movie} onOpen={openDetail} />
				))}
			</div>
			</PageLayout>
		);
}