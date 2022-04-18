import './app.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import boot from './boot';
import data from './data';
import loadMenu from './load-menu';

const menu = loadMenu(data.menu);
const { config } = data;
const { components, composition } = boot({ config, menu });
const app = { config, ...composition };
window.app = app;
window.document.title = config.app.name;
console.log({ app });

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<React.StrictMode><components.App /></React.StrictMode>);
