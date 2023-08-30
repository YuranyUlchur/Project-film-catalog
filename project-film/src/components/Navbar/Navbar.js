import React, { useState } from "react";
import { FaFilm } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { SearchBar } from '../SearchBar/SearchBar';


export const Navbar = ({ onSearch }) => {
    const [searchKey, setSearchKey] = useState('');

    const searchMovies = (e) => {
        e.preventDefault();
        console.log(`Searching for: ${searchKey}`);

    };

    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="containernavbar">
                <a className="navbar-brand" href="#"><FaFilm /> Film catalog</a>
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
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Movies
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Romance</a></li>
                                <li><a className="dropdown-item" href="#">Comedy</a></li>
                            </ul>
                        </li>
                    </ul>
                    <div className="ml-auto">
                        <SearchBar  searchMovies={searchMovies} setSearchKey={setSearchKey} onSearch={onSearch} />

                    </div>
                </div>
            </div>
        </nav>
    );
};
