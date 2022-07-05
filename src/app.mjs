import './app.css';
import { createRoot } from 'react-dom/client';
import React from 'react';
import compose from './compose.mjs';
import loadMenu from './load-menu.mjs';

console.log(1);

const menu = loadMenu();
const composition = compose({ configs: [{ menu }] });
const { config, modules } = composition;
window.app = composition;
window.document.title = config.app.name;

console.log(2);

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<React.StrictMode><modules.components.App /></React.StrictMode>);

console.log(3);
