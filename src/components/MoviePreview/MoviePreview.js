import React from 'react';
import styles from './MoviePreview.module.css';
import { BiCaretRightCircle } from "react-icons/bi";

import 'bootstrap/dist/css/bootstrap.min.css';

// MoviePreview component
export const MoviePreview = ({ movie, trailer }) => {
    const playTrailer = () => {
        if (trailer) {
            const youtubeURL = `https://www.youtube.com/watch?v=${trailer.key}`;
            window.open(youtubeURL, '_blank');
        }
    };

    return (
        <div >
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
                                        <BiCaretRightCircle />

                                    </button>
                                ) : (
                                    "Sorry, no trailer available"
                                )}
                            </div>
                        </div>
                    </div>
                ) : null}
            </main>
            <h1 className={styles.titlemovie}>{movie?.title}</h1>
        </div>
    );
};