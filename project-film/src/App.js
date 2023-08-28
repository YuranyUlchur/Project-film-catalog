import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { SearchBar} from './components/SearchBar/SearchBar';
import { MoviePreview } from './components/MoviePreview/MoviePreview';
import { MovieList } from './components/MovieList/MovieList';


export const App = () => {
    const API_URL = "https://api.themoviedb.org/3";
    const API_KEY = "4f5f43495afcc67e9553f6c684a82f84";
    const IMAGE_PATH = "https://image.tmdb.org/t/p/original";
    const URL_IMAGE = "https://image.tmdb.org/t/p/original";

    const [movies, setMovies] = useState([]);
    const [searchKey, setSearchKey] = useState("");
    const [trailer, setTrailer] = useState(null);
    const [movie, setMovie] = useState({ title: "Loading Movies" });
    const [playing, setPlaying] = useState(false);

    const fetchMovies = useCallback(async (searchKey) => {
        const type = searchKey ? "search" : "discover";
        const {
            data: { results },
        } = await axios.get(`${API_URL}/${type}/movie`, {
            params: {
                api_key: API_KEY,
                query: searchKey,
            },
        });

        setMovies(results);
        setMovie(results[0]);

        if (results.length) {
            await fetchMovie(results[0].id);
        }
    }, [API_URL, API_KEY]);

    const fetchMovie = async (id) => {
        const { data } = await axios.get(`${API_URL}/movie/${id}`, {
            params: {
                api_key: API_KEY,
                append_to_response: "videos",
            },
        });

        if (data.videos && data.videos.results) {
            const trailer = data.videos.results.find(
                (vid) => vid.name === "Official Trailer"
            );
            setTrailer(trailer ? trailer : data.videos.results[0]);
        }
        setMovie(data);
    };

    const selectMovie = async (selectedMovie) => {
        fetchMovie(selectedMovie.id);
        setMovie(selectedMovie);
        window.scrollTo(0, 0);
    };

    const searchMovies = (e) => {
        e.preventDefault();
        fetchMovies(searchKey);
    };

    useEffect(() => {
        fetchMovies();
    }, [fetchMovies]);

    return (
        <div>
            <h2 className="text-center mt-5 mb-5">Trailer Popular Movies</h2>
            <SearchBar searchMovies={searchMovies} setSearchKey={setSearchKey} />
            <MoviePreview
                movie={movie}
                playing={playing}
                trailer={trailer}
                setPlaying={setPlaying}
                IMAGE_PATH={IMAGE_PATH}
            />
            <MovieList movies={movies} selectMovie={selectMovie} URL_IMAGE={URL_IMAGE} />
        </div>
    );
}