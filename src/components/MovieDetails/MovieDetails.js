import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import './MovieDetails.css'
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';


export const MovieDetails = () => {
    // API URLs and keys
    const API_URL = "https://api.themoviedb.org/3";
    const API_KEY = "4f5f43495afcc67e9553f6c684a82f84";
    const IMAGE_PATH = "https://image.tmdb.org/t/p/original";

    // State declarations
    const [movies, setMovies] = useState([]);

    // Fetch movies from API
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

    // Fetch movie details from API
    const fetchMovie = async (id) => {
        await axios.get(`${API_URL}/movie/${id}`, {
            params: {
                api_key: API_KEY,
                append_to_response: "videos",
            },
        });

    };

    useEffect(() => {
        // Initial fetch of movies
        fetchMovies();
    }, [fetchMovies]);

    // Handle search input
    const handleSearch = (term) => {
        fetchMovies(term);
    };

    // Get movie ID from URL parameters
    const { id } = useParams();
    const movie = movies.find(movie => movie.id === Number(id));

    if (!movie) {
        // Display message if movie not found
        return <p>No se encontró la película</p>;
    }

    // Render movie details
    return (
        <div>
            <div className="movie-container">
                <div className='navbar-search container'>
                    <Navbar onSearch={handleSearch} />
                </div>
                <div className="movie-details-container container">
                    <div className="row">
                        <div className="col-sm">
                            <div className="movie-image-container">
                                <img
                                    src={`${IMAGE_PATH + movie.poster_path}`}
                                    alt=""
                                    className="movie-img img-fluid rounded"
                                />
                            </div>
                        </div>
                        <div className="col-sm text-container">
                            <div className="movie-text-container">
                                <h1 className="movie-title">{movie.title}</h1>
                                <p className="text-white">{movie.overview}</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
}
