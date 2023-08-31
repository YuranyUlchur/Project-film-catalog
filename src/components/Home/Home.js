import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MovieList } from '../MovieList/MovieList';
import { Navbar } from '../Navbar/Navbar';
import { MoviePreview } from '../MoviePreview/MoviePreview';
import './Home.css';

export const Home = () => {
    // API configurations
    const API_URL = "https://api.themoviedb.org/3";
    const API_KEY = "4f5f43495afcc67e9553f6c684a82f84";
    const IMAGE_PATH = "https://image.tmdb.org/t/p/original";

    // States to manage various aspects of the component
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [movies, setMovies] = useState([]);
    const [searchKey, setSearchKey] = useState("");
    const [trailer, setTrailer] = useState(null);
    const [movie, setMovie] = useState({ title: "Loading Movies..." });
    const [playing, setPlaying] = useState(false);

    // Handle movie click event
    const handleMovieClick = (movie) => {
        setSelectedMovie(movie);
    };

    // Fetch movies from API based on search term or discover
    const fetchMovies = useCallback(async (searchTerm) => {
        const type = searchTerm ? "search" : "discover";
        const {
            data: { results },
        } = await axios.get(`${API_URL}/${type}/movie`, {
            params: {
                api_key: API_KEY,
                query: searchTerm,
            },
        });

        setMovies(results);

        if (results.length) {
            await fetchMovie(results[0].id);
        }
    }, [API_URL, API_KEY]);

    // Fetch a movie's details including videos
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

    // Select a movie for detailed view
    const selectMovie = async (selectedMovie) => {
        fetchMovie(selectedMovie.id);
        setMovie(selectedMovie);
        window.scrollTo(0, 0);
    };

    // Handle search
    const handleSearch = (term) => {
        setSearchKey(term);
        fetchMovies(term);
    };

    // Fetch movies on component mount
    useEffect(() => {
        fetchMovies();
    }, [fetchMovies]);

    return (
        <div className="boxapp">
            <div
                style={{
                    overflow: 'hidden',
                    backgroundImage: `url("${IMAGE_PATH}${movie.backdrop_path}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '700px',
                    marginBottom: '100px',
                    opacity: '0.9',
                }}
            >
                {/* Navbar for search */}
                <Navbar onSearch={handleSearch} />
                {/* Display movie preview */}
                <MoviePreview
                    movie={movie}
                    playing={playing}
                    trailer={trailer}
                    setPlaying={setPlaying}
                    IMAGE_PATH={IMAGE_PATH}
                />
            </div>
            {/* Display list of movies */}
            <MovieList movies={movies} selectMovie={selectMovie} URL_IMAGE={IMAGE_PATH} />
        </div>
    );
};