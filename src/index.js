import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import boot from './boot';
import data from './data';

const { config } = data;
const { modules } = boot({ config, data });
const { pureComponents, components, menuReader } = modules;

window.document.title = config.app.name;

ReactDOM.render(
  <React.StrictMode>
    {components.App({ pureComponents, components, menuReader })}
  </React.StrictMode >,
  document.getElementById('root')
);
