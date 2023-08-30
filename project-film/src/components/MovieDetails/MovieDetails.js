import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import './MovieDetails.css'


export const MovieDetails = () => {
    const API_URL = "https://api.themoviedb.org/3";
    const API_KEY = "4f5f43495afcc67e9553f6c684a82f84";
    const IMAGE_PATH = "https://image.tmdb.org/t/p/original";

    const [selectedMovie, setSelectedMovie] = useState(null);
    const [movies, setMovies] = useState([]);
    const [searchKey, setSearchKey] = useState("");
    const [trailer, setTrailer] = useState(null);
    const [playing, setPlaying] = useState(false);
    const [movieFetch, setMovie] = useState({ title: "Loading Movies" });


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

    useEffect(() => {
        fetchMovies();
    }, [fetchMovies]);

    const { id } = useParams();
    const movie = movies.find(movie => movie.id === Number(id));

    if (!movie) {
        return <p>No se encontró la película</p>;
    }

    return (
        <div className="movie-container">
            <div className="movie-details-container">
                <div className="movie-image-container">
                    <img
                        src={`${IMAGE_PATH + movie.poster_path}`}
                        alt=""
                        className="movie-img img-fluid rounded"
                    />
                </div>
                <div className="movie-text-container">
                    <h1 className="movie-title">{movie.title}</h1>
                          <p className="movie-description">{movie.description}</p>
                </div>
            </div>
        </div>
    );
}

