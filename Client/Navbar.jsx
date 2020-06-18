import React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div id="header">
        <nav>
          <Link to="/programs">Programs</Link>
          <Link to="/ethnicity">Ethnicity</Link>
          <Link to="/income">Income</Link>
        </nav>
      </div>
    );
  }
}
