import './app.css';
import React from 'react';
import ReactDOM from 'react-dom';
import boot from './boot';
import data from './data';

const { config } = data;
const modules = boot({ config, data });
const { components } = modules;

window.document.title = config.app.name;

ReactDOM.render(
    <React.StrictMode>
        <components.App {...modules} />
    </React.StrictMode >,
    document.getElementById('root')
);
