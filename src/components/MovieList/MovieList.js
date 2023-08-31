import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MovieList.module.css';


// MovieList component definition
export const MovieList = ({ movies, selectMovie, URL_IMAGE, onMovieClick }) => {
    return (
        <div className="container mt-3">
            <div className="row">
                {movies.map((movie) => (
                    <div
                        key={movie.id}
                        className="col-md-4 mb-3 movie-card"
                        onClick={() => selectMovie(movie)}
                    >
                        <Link to={{
                            pathname: `/movie/${movie.id}`
                        }}>
                            <img
                                src={`${URL_IMAGE + movie.poster_path}`}
                                alt=""
                                height={470}
                                width="100%"
                                className="movie-poster"
                            />

                        </Link>
                        <div>
                            <h4 className="movietitle text-white">{movie.title}</h4>
                        </div>

                    </div>
                ))}
            </div>
            <div>
                {movies.map(movie => (
                    <div key={movie.id} onClick={() => onMovieClick(movie)}>
                    </div>
                ))}
            </div>
        </div>
    );
}