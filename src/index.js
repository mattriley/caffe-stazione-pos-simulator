import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import loadMenu from './load-menu';
import moduleComposer from 'module-composer';
import modules from './modules';
import { menu, config } from './data';

const { components, util } = modules;
const compose = moduleComposer(modules);
const menuReader = compose('menuReader', { util, menu: loadMenu(menu) });
const pureComponents = compose('pureComponents', { menuReader, util, config });

ReactDOM.render(
  <React.StrictMode>
    {components.App({ pureComponents, components, menuReader })}
  </React.StrictMode >,
  document.getElementById('root')
);
