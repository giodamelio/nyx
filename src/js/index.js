import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import domready from 'domready';

import App from './app';
import Index from './pages/index';

domready(function() {
  ReactDOM.render(
    <Router>
      <Route path='/' component={App}>
        <IndexRoute component={Index} />
      </Route>
    </Router>,
    document.getElementById('app')
  );
});

