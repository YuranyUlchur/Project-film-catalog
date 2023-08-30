import React from 'react';
import { Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './components/Home/Home';
import { MovieDetails } from './components/MovieDetails/MovieDetails';

export const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="movie/:id" element={<MovieDetails />} />
            </Routes>
        </div>

    );
};

