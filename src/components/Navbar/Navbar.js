import React, { useState } from "react";
import { FaFilm } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Navbar.module.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { Link } from "react-router-dom";

export const Navbar = ({ onSearch }) => {
    const [searchKey, setSearchKey] = useState('');
    // implementation of a key for movie search in search
    const searchMovies = (e) => {
        e.preventDefault();
        console.log(`Searching for: ${searchKey}`);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                {/*name page*/}
                <Link className={styles.titlepage} to="/">
                    <FaFilm /> Film catalog
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={styles.navlink} to="/">
                                Home
                            </Link>
                        </li>
                    </ul>

                    <div className="d-flex">
                        <SearchBar searchMovies={searchMovies} setSearchKey={setSearchKey} onSearch={onSearch} />
                    </div>
                </div>
            </div>
        </nav>
    );
};
