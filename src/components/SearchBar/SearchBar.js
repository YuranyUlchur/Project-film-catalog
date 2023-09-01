import React, { useState } from 'react';
import './SearchBar.module.css'; 
import { FaSistrix } from "react-icons/fa6";

// Defining the SearchBar component using a functional component approach
export const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState(''); // State hook to manage the search term

    // Event handler to update the search term as the user types
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // Event handler to handle the form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Preventing the default form submission behavior
        onSearch(searchTerm); // Calling the onSearch function with the current search term
    };

    // JSX rendering of the SearchBar component
    return (
        <form className="container-form" onSubmit={handleSubmit}>
            <div className="input-button-container">
                <div className="input-group">
                    <input
                        className="form-control input-form"
                        type="text"
                        placeholder="Search"
                        value={searchTerm} // Binding the input value to the searchTerm state
                        onChange={handleSearchChange} // Binding the input change event to the handleSearchChange function
                    />
                    <button className="btn btn-primary button-search" type="submit">
                        <FaSistrix /> {/* Rendering the FaSistrix icon */}
                    </button>
                </div>
            </div>
        </form>
    );
};
