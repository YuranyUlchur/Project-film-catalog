import React, { useState } from 'react';
import styles from './SearchBar.module.css';

export const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <form className={styles.containerform} onSubmit={handleSubmit}>
            <input
                className={styles.inputform}
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <button className={styles.buttonsearch} type="submit">
                Search
            </button>
        </form>
    );
};
