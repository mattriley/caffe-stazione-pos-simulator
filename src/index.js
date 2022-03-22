import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import loadMenu from './load-menu';
import moduleComposer from 'module-composer';
import modules from './modules';
import { menu, config } from './data';

const { components, util } = modules;
const compose = moduleComposer(modules);
const data = compose('data', { menu: loadMenu(menu) });
const lib = compose('lib', { util });
const pureComponents = compose('pureComponents', { data, lib, util, config });

ReactDOM.render(
  <React.StrictMode>
    {components.App({ pureComponents, components, data })}
  </React.StrictMode >,
  document.getElementById('root')
);
