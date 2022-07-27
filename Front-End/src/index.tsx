import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';

import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <React.StrictMode>
        <App></App>
    </React.StrictMode>,
    document.getElementById('root')
);