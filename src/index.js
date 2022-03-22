import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import loadMenu from './load-menu';
import moduleComposer from 'module-composer';
import modules from './modules';
import data from './data';

const { components, lib } = modules;
const compose = moduleComposer(modules);
const menu = loadMenu(data.menu);
const services = compose('services', { lib, menu });
const pureComponents = compose('pureComponents', { services, lib, menu, config: data.config });

ReactDOM.render(
  <React.StrictMode>
    {components.App({ pureComponents, components, services })}
  </React.StrictMode >,
  document.getElementById('root')
);
