// Import necessary libraries and components
import React, { useState } from "react";
import { FaFilm } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; // Import custom styling
import { SearchBar } from '../SearchBar/SearchBar';
import { Link } from "react-router-dom";

// Define the Navbar component
export const Navbar = ({ onSearch }) => {
    // State to hold the search key
    const [searchKey, setSearchKey] = useState('');

    // Function to handle movie search
    const searchMovies = (e) => {
        e.preventDefault();
        console.log(`Searching for: ${searchKey}`);
    };

    return (
        <div className="container">
            {/* Navigation bar */}
            <nav className="navbar navbar-expand-lg">
                <div className="containernavbar">
                    <div className="row">
                        {/* Left side of the navigation bar */}
                        <div className="col">
                            {/* Link to home */}
                            <Link className="link-brand" to="/">
                                <h1 className="navbar-brand"><FaFilm /> Film catalog</h1>
                            </Link>
                        </div>

                        {/* Right side of the navigation bar */}
                        <div className="col align-self-end">
                            {/* Button to toggle navigation menu */}
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
                            {/* Navigation menu */}
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    {/* Link to home */}
                                    <li className="nav-item active">
                                        <Link className="link-home" to="/">
                                            <h3 className="nav-home">Home <span className="sr-only"></span></h3>
                                        </Link>
                                    </li>
                                </ul>
                                {/* Search bar */}
                                <div className="ml-auto">
                                    <SearchBar searchMovies={searchMovies} setSearchKey={setSearchKey} onSearch={onSearch} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};
