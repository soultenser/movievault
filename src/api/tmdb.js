const API_KEY = import.meta.env.VITE_TMBD_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const searchMovies = async (query, language = "en-US") => {
    if (!query) return [];

    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&language=${language}&query=${encodeURIComponent(
            query
        )}&page=1&include_adult=false`
    );

    const data = await response.json();
    return data.results || [];
}