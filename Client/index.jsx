import React from 'react';
import ReactDOM from 'react-dom';
import School from './School';
import Routes from './Routes';
import { Router } from 'react-router-dom';
import history from './history';
import Navbar from './Navbar';

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Navbar />
        <Routes />
        {/* <School /> */}
      </div>
    );
  }
}

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('app')
);
