import React from 'react';
import ReactDOM from "react-dom/client";
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root'); // Get the DOM element with the ID 'root' where the React app will be rendered.
const root = ReactDOM.createRoot(rootElement); // Create a root for concurrent mode rendering on the specified root element.

root.render( // Render the React component into the specified root element.
    <BrowserRouter> {/* Use the BrowserRouter component to set up routing */}
        <App /> {/* Render the imported "App" component */}
    </BrowserRouter>
);