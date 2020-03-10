import React from 'react';
import './sass/main.scss';
import { Route } from 'react-router';
import App from './components/app';
import Home from './components/pages/home';
import { BrowserRouter as Router } from "react-router-dom";

export default () => (
   <Router>
    <div>
      <Route path='/' component={App}>
        <Route path='/' component={Home} />
      </Route>
    </div>
  </Router>
);



