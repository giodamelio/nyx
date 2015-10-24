import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import domready from 'domready';

import App from './app';
import Posts from './pages/posts';
import Edit from './pages/edit';

domready(function() {
  ReactDOM.render(
    <Router>
      <Route path='/' component={App}>
        <IndexRoute component={Posts} />
        <Route path='/edit' component={Edit} />
      </Route>
    </Router>,
    document.getElementById('app')
  );
});

