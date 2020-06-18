import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';

export default class Navbar extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div id="header">
        <nav style={headerStyle}>
          <div id="left-side">
            <Link to="/school">
              <Button>School Info</Button>
            </Link>
            <Link to="/programs">
              <Button>Programs</Button>
            </Link>
            <Link to="/ethnicity">
              <Button>Ethnicity</Button>
            </Link>
            <Link to="/income">
              <Button>Income</Button>
            </Link>
          </div>
          <div id="right-side">
            <SaveIcon cursor={'pointer'} onClick={() => window.print()} />
            <PrintIcon cursor={'pointer'} onClick={() => window.print()} />
          </div>
        </nav>
      </div>
    );
  }
}
const headerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  padding: 15,
  borderBottom: 'solid',
};
