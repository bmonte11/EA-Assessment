import React from 'react';
import DonutChart from 'react-donut-chart';

export default class Ethnicity extends React.Component {
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
      const students = results[0].latest.student.demographics.race_ethnicity;
      return (
        <div id="ethnicity-chart">
          <DonutChart
            height={300}
            width={400}
            data={[
              {
                label: 'White',
                value: students.white * 100,
              },
              {
                label: 'Black',
                value: students.black * 100,
              },
              {
                label: 'Aian',
                value: students.aian * 100,
              },
              {
                label: 'Asian',
                value: students.asian * 100,
              },
              {
                label: 'Hispanic',
                value: students.hispanic * 100,
              },
              {
                label: 'NHPI',
                value: students.nhpi * 100,
              },
              {
                label: 'Non-resident Alien',
                value: students.non_resident_alien * 100,
              },
              {
                label: 'Two or More',
                value: students.two_or_more * 100,
              },
              {
                label: 'Unknown',
                value: students.unknown * 100,
              },
            ]}
          />
        </div>
      );
    }
  }
}
