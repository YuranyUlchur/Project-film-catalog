import React, { useState } from 'react';
import styles from './MoviePreview.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// MoviePreview component
export const MoviePreview = ({ movie }) => {
    const [expanded, setExpanded] = useState(false);

    const handleToggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <div className={styles.boxbody}>
            <h1 className={styles.titlemovie}>{movie?.title}</h1>
            <p className={styles.descriptionmovie}>
                {movie?.overview && (
                    <>
                        {expanded ? movie.overview : `${movie.overview.substring(0, 150)}...`}
                        {movie.overview.length > 150 && (
                            <span className={styles.expandButton} onClick={handleToggleExpand}>
                                {expanded ? 'Ver menos' : 'Ver más'}
                            </span>
                        )}
                    </>
                )}
            </p>
        </div>
    );
};
