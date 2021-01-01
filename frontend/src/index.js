import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {BrowserRouter} from "react-router-dom";

const body = document.getElementsByTagName('body');
body[0].style.height = `${window.innerHeight}px`;

const app = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
ReactDOM.render(app,document.getElementById('root'));