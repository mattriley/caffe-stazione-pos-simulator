import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import moduleComposer from 'module-composer';
import modules from './modules';
import data from './data';

const { components, util } = modules;
const compose = moduleComposer(modules);
const startup = compose('startup');
const { menu, config } = startup.loadData(data);
const menuReader = compose('menuReader', { util, menu });
const pureComponents = compose('pureComponents', { menuReader, util, config });

window.document.title = config.app.name;

ReactDOM.render(
  <React.StrictMode>
    {components.App({ pureComponents, components, menuReader })}
  </React.StrictMode >,
  document.getElementById('root')
);
