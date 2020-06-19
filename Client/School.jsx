import React from 'react';
import GetAppIcon from '@material-ui/icons/GetApp';
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';

class School extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch(
      'https://api.data.gov/ed/collegescorecard/v1/schools/?school.operating=1&2015.academics.program_available.assoc_or_bachelors=true&2015.student.size__range=1..&school.degrees_awarded.predominant__range=1..3&school.degrees_awarded.highest__range=2..4&id=240444&api_key=BEI70IJXY5xi2kznCtC5aScZhlSQtT3qFS1ahNx2'
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
  }

  render() {
    const results = this.state.items.results;
    if (!this.state.isLoaded) {
      return <div> Loading... </div>;
    } else {
      const enrollment = results[0].latest.student.enrollment;
      const blob = new Blob([JSON.stringify(results[0].school)], {
        type: 'application/json',
      });
      console.log(results);
      return (
        <div style={infoStyle}>
          <Container component={Paper}>
            <div style={headingStyle}>
              <h2>School Info</h2>
              <GetAppIcon
                cursor={'pointer'}
                onClick={() => saveAs(blob, 'SchoolData.csv')}
              />
              <p>Download to .csv</p>
            </div>
            <div id="school-info" style={chartStyle}>
              <p id="name">
                {' '}
                <strong>School: </strong>
                {results[0].school.name}
              </p>
              <p id="website">
                <strong>Website: </strong>
                {results[0].school.school_url}
              </p>
              <p id="city">
                <strong> City: </strong>
                {results[0].school.city}
              </p>
              <p id="state">
                <strong> State: </strong>
                {results[0].school.state}
              </p>
              <p id="zip">
                <strong> Zip: </strong>
                {results[0].school.zip}
              </p>
              <p id="total-students">
                <strong>Total Number of Students: </strong>
                {enrollment.undergrad_12_month + enrollment.grad_12_month}
              </p>
            </div>
          </Container>
        </div>
      );
    }
  }
}

const infoStyle = {
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: 15,
};

const headingStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 15,
};

const chartStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  padding: 25,
};

export default School;
