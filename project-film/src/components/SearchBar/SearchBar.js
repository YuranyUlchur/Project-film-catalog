import React from 'react';
import styles from './SearchBar.module.css';

export const SearchBar = ({ searchMovies, setSearchKey }) => {
    return (
        <form className={styles.containerform} onSubmit={searchMovies}>
            <input className={styles.inputform}
                type="text"
                placeholder="search"
                onChange={(e) => setSearchKey(e.target.value)}
            />
            <button className={styles.buttonsearch}>Search</button>
        </form>
    );

}

