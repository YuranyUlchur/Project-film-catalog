import React from 'react';
import YouTube from 'react-youtube';
import styles from './MoviePreview.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// MoviePreview component
export const MoviePreview = ({ movie, playing, trailer, setPlaying }) => {
    const playTrailer = () => {
        if (trailer) {
            setPlaying(true);
        }
    };

    return (
        <div className='d-flex container justify-content-center'>
            <main className={styles.boxmain}>
                {movie ? (
                        <div className={styles.viewtrailer}>
                            
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
                            </div>
                            {/*player implementation*/}
                            {playing && trailer && (
                                <>
                                    <YouTube
                                        videoId={trailer.key}
                                        className={styles.reproductor}
                                    />
                                    <div className="boxclose container">
                                        <div className='row '>
                                            <div className='col  align-self-center'>
                                                <button onClick={() => setPlaying(false)} className={styles.buttonclose}>
                                                    Close
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                ) : null}
            </main>
            <h1 className={styles.titlemovie}>{movie.title}</h1>
        </div>
    );
};
