import React from 'react';
import YouTube from 'react-youtube';

export const MoviePreview = ({ movie, playing, trailer, setPlaying, IMAGE_PATH }) => {
    return (
        <div>
            <main>
                {movie ? (
                    <div
                        className="viewtrailer"
                        style={{
                            backgroundImage: `url("${IMAGE_PATH}${movie.backdrop_path}")`,
                        }}
                    >
                        {playing ? (
                            <>
                                <YouTube
                                    videoId={trailer.key}
                                    className="reproductor container"
                                    containerClassName={"youtube-container amru"}
                                />
                                <button onClick={() => setPlaying(false)} className="boton">
                                    Close
                                </button>
                            </>
                        ) : (
                            <div className="container">
                                <div className="">
                                    {trailer ? (
                                        <button
                                            className="boton"
                                            onClick={() => setPlaying(true)}
                                            type="button"
                                        >
                                            Play Trailer
                                        </button>
                                    ) : (
                                        "Sorry, no trailer available"
                                    )}
                                    <h1 className="text-white">{movie.title}</h1>
                                    <p className="text-white">{movie.overview}</p>
                                </div>
                            </div>
                        )}
                    </div>
                ) : null}
            </main>
        </div>
    );
}

