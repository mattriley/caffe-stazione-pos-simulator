import './app.css';
import React from 'react';
import ReactDOM from 'react-dom';
import boot from './boot';
import data from './data';

const { config } = data;
const { components } = boot({ config, data });

window.document.title = config.app.name;

ReactDOM.render(
    <React.StrictMode>
        <components.App />
    </React.StrictMode >,
    document.getElementById('root')
);
