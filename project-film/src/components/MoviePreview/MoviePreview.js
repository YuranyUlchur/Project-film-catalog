import React from 'react';
import { useNavigate } from 'react-router-dom';
import YouTube from 'react-youtube';
import styles from './MoviePreview.module.css';


export const MoviePreview = ({ movie, playing, trailer, setPlaying, IMAGE_PATH }) => {
    const navigate = useNavigate();

    const playTrailer = () => {
        if (trailer) {
            setPlaying(true);
            navigate('/trailer');
        }
    };


    return (
        <div>
            <main className={styles.boxmain}>
                {movie ? (
                    <div
                        className={styles.viewtrailer}

                    >
                        {playing ? (
                            <>
                                <YouTube
                                    videoId={trailer.key}
                                    className={styles.reproductor}
                                    containerClassName={"youtube-container amru"}
                                />
                                <button onClick={() => setPlaying(false)} className={styles.buttonclose}>
                                    Close
                                </button>
                            </>
                        ) : (
                            <div className={styles.boxbuttontrailer}>
                                <div className={styles.containerbuttontrailer}>
                                    {trailer ? (
                                        <button
                                            className={styles.buttontrailer}
                                            onClick={playTrailer}
                                            type="button"
                                        >
                                            Play Trailer
                                        </button>
                                    ) : (
                                        "Sorry, no trailer available"
                                    )}
                                </div>
                                <div className={styles.boxcontainerdescription}>
                                    <div className={styles.containerdescription}>
                                        <h1 className={styles.titlemovie}>{movie.title}</h1>
                                        <p className={styles.textoverview}>{movie.overview}</p>
                                    </div>
                                </div>
                            </div>

                        )}
                    </div>

                ) : null}
            </main>

        </div>
    );
}
