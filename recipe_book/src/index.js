import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {RecipeContext, RecipeProvider} from './context/RecipeContext';
import {BrowserRouter as Router} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
export {RecipeContext}

root.render(
    <React.StrictMode>
        <RecipeProvider>
            <Router>
                <App/>
            </Router>
        </RecipeProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function to
// log results (for example: reportWebVitals(console.log)) or send to an
// analytics endpoint. Learn more: https://bit.ly/CRA-vitals reportWebVitals();