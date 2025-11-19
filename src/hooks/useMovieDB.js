import { useState, useEffect } from 'react';
import Dexie from 'dexie';

const db = new Dexie('MovieVaultDB');

db.version(1).stores({
  toWatch: '++id, tmdbId',
  watched: '++id, tmdbId',
  favorites: '++id, tmdbId'
});

export function useMovieDB() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    db.open()
      .then(() => setLoading(false))
      .catch((err) => {
        console.error('Error while opening DB:', err);
        setLoading(false);
      });
  }, []);

  // --- CRUD FUNCTIONS ---

  const addMovie = async (storeName, movie) => {
    if (!movie.id) throw new Error('No id in TMDB!');
    const exists = await db[storeName].where({ tmdbId: movie.id }).first();
    if (!exists) {
      await db[storeName].add({ ...movie, tmdbId: movie.id });
    }
  };

  const removeMovie = async (storeName, tmdbId) => {
    const movie = await db[storeName].where({ tmdbId }).first();
    if (movie) await db[storeName].delete(movie.id);
  };

  const removeFromAll = (movieId) => {
    removeMovie("favorites", movieId);
    removeMovie("watched", movieId);
    removeMovie("toWatch", movieId);
  }

  const getAllMovies = async (storeName) => {
    return await db[storeName].toArray();
  };

  const getMovie = async (storeName, tmdbId) => {
    return await db[storeName].where({ tmdbId }).first();
  };

  const updateMovie = async (storeName, tmdbId, updatedFields) => {
    const movie = await db[storeName].where({ tmdbId }).first();
    if (movie) {
      await db[storeName].update(movie.id, updatedFields);
    }
  };

  return {
    loading,
    addMovie,
    removeMovie,
    removeFromAll,
    getAllMovies,
    getMovie,
    updateMovie
  };
}