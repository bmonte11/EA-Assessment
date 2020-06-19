import React from 'react';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h2 style={homeStyle}>
        Click the Links Above to Navigate through the Most Recent School Year
        Data
      </h2>
    );
  }
}

const homeStyle = {
  display: 'flex',
  justifyContent: 'center',
  padding: 50,
};
