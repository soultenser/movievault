import FlexContainer from "../components/movies-container/FlexContainer"
import MovieCard from "../components/MovieCard"
import { useMovieDB } from "../hooks/useMovieDB"
import { useState, useEffect } from "react";
import PageLayout from "../components/PageLayout";
import SavedMovieDetail from "../components/SavedMovieDetail";

export default function Home() {

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
    		const data = await getAllMovies("toWatch");
    		setMovies(data);
		}
		load();
		
	}, [movies]);

	return (
		<PageLayout
			detailOpen={detailOpen}
			detailContent={
				selected && (
					<SavedMovieDetail movie={selected} onClose={() => setDetailOpen(false)} store="toWatch" />
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