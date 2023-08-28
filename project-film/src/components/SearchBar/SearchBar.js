import React from 'react';

export const SearchBar = ({ searchMovies, setSearchKey }) => {
    return (
        <form className="container mb-4" onSubmit={searchMovies}>
            <input
                type="text"
                placeholder="search"
                onChange={(e) => setSearchKey(e.target.value)}
            />
            <button className="btn btn-primary">Search</button>
        </form>
    );

}

