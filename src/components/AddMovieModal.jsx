import { useTranslation } from "react-i18next";
import { searchMovies } from "../api/tmdb";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

export default function AddMovieModal({ isOpen, onClose }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();
  
  useEffect(() => {
    if (!searchTerm.trim()) {
      setResults([]);
      return;
    }

    const delayDebounce = setTimeout(async () => {
      setLoading(true);
      const movies = await searchMovies(searchTerm);
      setResults(movies);
      setLoading(false);
    }, 300); // debounce per non spammare l'API

    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-primary text-clear rounded-2xl shadow-lg w-full max-w-xl mx-4 p-6 relative">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{ t("modal_h2") }</h2>

          {/* Bottone di chiusura */}
          <button
            onClick={onClose}
            className="text-accent flex items-center justify-center w-10 h-10 bg-panel hover:bg-panel/60 active:bg-panel shadow-md rounded-full text-2xl leading-none"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Search bar */}
        <input
          type="text"
          placeholder={ t("modal_search_placeholder") }
          className="w-full text-neutral bg-panel hover:bg-panel/60 shadow-md rounded-xl p-3 outline-none focus:ring-2 focus:ring-neutral"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Results */}
        <div className="mt-4 h-64 overflow-y-auto scroll-smooth pl-2 pr-2">

          {!loading && !searchTerm && (
            <p className="text-neutral text-sm">
              {t("search_term_false")}
            </p>
          )}

          {loading && (
          <p className="text-neutral text-sm">
            {t("search_term_true")}
          </p>
          )}

          {!loading && results.length === 0 && searchTerm && (
            <p className="text-neutral text-sm"> No movies found. </p>
          )}

          {!loading && 
            results.map((movie) => (
              <Link
                to={`/movie/${movie.id}`}
                onClick={onClose}
                key={movie.id}
                className="flex items-center gap-3 p-2 bg-panel mb-1 shadow-md rounded-xl hover:bg-panel/60 cursor-pointer transition"
              >
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w92${movie.poster_path}`
                      : "https://via.placeholder.com/92x138?text=No+Image"
                  }
                  alt={movie.title}
                  className="w-12 h-16 rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-medium text-white text-sm">
                    {movie.title}
                  </h3>
                  <p className="text-neutral-400 text-xs">
                    {movie.release_date?.slice(0, 4) || "N/A"}
                  </p>
                </div>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  );
};
