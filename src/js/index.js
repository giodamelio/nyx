import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link } from 'react-router';
import domready from 'domready';

import Index from './pages/index';

class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
        </ul>

        {this.props.children}
      </div>
    );
  }
}

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

