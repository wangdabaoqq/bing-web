import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Detail from './views/Detail'
// import Index from './views/Index'

// import { Router, Route } from 'react-router';
import { Route,  BrowserRouter, Switch } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
  {/* <Router> */}
  <Switch>
    <Route path="/" exact component={App}></Route>
    <Route path="/detail/:id"  component={Detail}></Route>
  {/* </Router> */}
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
