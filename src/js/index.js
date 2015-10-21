import React from 'react';
import ReactDOM from 'react-dom';
import domready from 'domready';

class App extends React.Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}

domready(function() {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  );
});

