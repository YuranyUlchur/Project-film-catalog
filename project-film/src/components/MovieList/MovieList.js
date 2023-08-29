import React from 'react';
import './MovieList.module.css';


export const MovieList = ({ movies, selectMovie, URL_IMAGE }) => {
    return (
        <div className="container mt-3">
            <div className="row">
                {movies.map((movie) => (
                    <div
                        key={movie.id}
                        className="col-md-4 mb-3"
                        onClick={() => selectMovie(movie)}
                    >
                        <img
                            src={`${URL_IMAGE + movie.poster_path}`}
                            alt=""
                            height={600}
                            width="100%"
                        />
                        <h4 className="">{movie.title}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
}



