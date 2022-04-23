import './app.css';
import { createRoot } from 'react-dom/client';
import React from 'react';
import compose from './compose.js';
import loadMenu from './load-menu.js';
import config from './default-config.json';

const menu = loadMenu();
const { components, composition } = compose({ config, menu });
window.app = { config, ...composition };
window.document.title = config.app.name;

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<React.StrictMode><components.App /></React.StrictMode>);
