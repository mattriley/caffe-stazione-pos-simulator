import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import loadMenu from './load-menu';
import moduleComposer from 'module-composer';
import modules from './modules';

const { components, lib } = modules;
const compose = moduleComposer(modules);
const menu = loadMenu();
const services = compose('services', { lib, menu });
const pureComponents = compose('pureComponents', { services, lib, menu });

ReactDOM.render(
  <React.StrictMode>
    {components.App({ pureComponents, components, services })}
  </React.StrictMode >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
