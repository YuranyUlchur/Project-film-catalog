import React, { useState } from 'react';
import './SearchBar.module.css';
import { FaSistrix } from "react-icons/fa6";

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
        <form className="container-form" onSubmit={handleSubmit}>
            <div className="input-button-container">
                <div className="input-group">
                    <input
                        className="form-control input-form"
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <button className="btn btn-primary button-search" type="submit">
                        <FaSistrix />
                    </button>
                </div>
            </div>
        </form>


    );
};
