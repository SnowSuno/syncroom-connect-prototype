import React from 'react';
import ReactDOM from 'react-dom';
import './globals.css';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter as Router} from "react-router-dom";

import App from "./App";

import {ThemeProvider} from '@mui/material/styles';
import {theme} from "./theme";


ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Router>
                <App/>
            </Router>
        </ThemeProvider>

    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
