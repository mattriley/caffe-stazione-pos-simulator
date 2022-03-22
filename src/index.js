import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import loadMenu from './load-menu';
import moduleComposer from 'module-composer';
import modules from './modules';
import { menu, config } from './data';

const { components, util } = modules;
const compose = moduleComposer(modules);
const data = compose('data', { util, menu: loadMenu(menu) });
const pureComponents = compose('pureComponents', { data, util, config });

ReactDOM.render(
  <React.StrictMode>
    {components.App({ pureComponents, components, data })}
  </React.StrictMode >,
  document.getElementById('root')
);
