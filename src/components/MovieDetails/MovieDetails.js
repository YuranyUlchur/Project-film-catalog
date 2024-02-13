import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import styles from './MovieDetails.module.css';
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';
import { BiCaretRightCircle } from 'react-icons/bi';

export const MovieDetails = () => {
    const API_URL = 'https://api.themoviedb.org/3';
    const API_KEY = '4f5f43495afcc67e9553f6c684a82f84';
    const IMAGE_PATH = 'https://image.tmdb.org/t/p/original';

    const [movies, setMovies] = useState([]);
    const [selectedTrailer, setSelectedTrailer] = useState(null);
    const [expanded, setExpanded] = useState(false);

    const fetchMovie = useCallback(async (id) => {
        const response = await axios.get(`${API_URL}/movie/${id}`, {
            params: {
                api_key: API_KEY,
                append_to_response: 'videos',
            },
        });

        const trailer = response.data.videos.results.find(video => video.type === 'Trailer');
        setSelectedTrailer(trailer);
    }, [API_URL, API_KEY]);

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
    }, [API_URL, API_KEY, fetchMovie]);

    useEffect(() => {
        // Initial fetch of movies
        fetchMovies();
    }, [fetchMovies]);

    const handleSearch = (term) => {
        fetchMovies(term);
    };

    const { id } = useParams();
    const movie = movies.find((movie) => movie.id === Number(id));

    const handleToggleExpand = () => {
        setExpanded(!expanded);
    };

    if (!movie) {
        // Display message if movie not found
        return <p>No se encontró la película</p>;
    }

    const playTrailer = () => {
        if (selectedTrailer && selectedTrailer.key) {
            const youtubeURL = `https://www.youtube.com/watch?v=${selectedTrailer.key}`;
            window.open(youtubeURL, '_blank');
        } else {
            console.error('No se encontró el tráiler o la clave del tráiler.');
        }
    };

    return (
        <div className={styles.movieContainer}>
            <div className={`${styles.navbarSearch} container`}>
                <Navbar onSearch={handleSearch} />
            </div>
            <div className={`${styles.movieDetailsContainer} container`}>
                <div className="row">
                    <div className="col-sm">
                        <div className={styles.movieImageContainer}>
                            <img
                                src={`${IMAGE_PATH + movie.poster_path}`}
                                alt=""
                                className={`${styles.movieImg} img-fluid rounded`}
                            />
                        </div>
                    </div>
                    <div className="col-sm text-container">
                        <div className={styles.movieTextContainer}>
                            <h1 className={styles.movieTitle}>{movie.title}</h1>

                            <main className={styles.boxMain}>
                                <div className={styles.contentWrapper}>
                                    <p className={`${styles.textWhite} text-white`}>
                                        {movie && movie.overview && (
                                            <>
                                                {movie.overview.length > 150 ? (
                                                    <>
                                                        {expanded ? movie.overview : `${movie.overview.substring(0, 150)}...`}
                                                        <span
                                                            onClick={handleToggleExpand}
                                                            className={styles.expandButton}
                                                        >
                                                            {expanded ? 'Ver menos' : 'Ver más'}
                                                        </span>
                                                    </>
                                                ) : (
                                                    movie.overview
                                                )}
                                            </>
                                        )}
                                    </p>
                                    {selectedTrailer && (
                                        <div className={styles.trailerButtonWrapper}>
                                            <button
                                                className={styles.buttonTrailer}
                                                onClick={playTrailer}
                                                type="button"
                                            >
                                                <BiCaretRightCircle />
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
