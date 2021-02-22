import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router";
import { createBrowserHistory } from "history";

import { HashRouter } from "react-router-dom";
import App from './App';
const history = createBrowserHistory();

ReactDOM.render(
  <HashRouter history={history}>
    <App />
  </HashRouter>,
  document.getElementById('root')
);
