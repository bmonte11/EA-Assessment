import React from 'react';
import DonutChart from 'react-donut-chart';

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
      console.log(results[0]);
      const students = results[0].latest.student.demographics.race_ethnicity;
      const programs = results[0].latest.academics.program_percentage;
      const income = results[0].latest.student;
      const enrollment = results[0].latest.student.enrollment;
      console.log(programs, 'here are the programs');
      return (
        <div>
          <div id="school-info">
            <div id="name">School: {results[0].school.name}</div>
            <div id="website">Website: {results[0].school.school_url}</div>
            <div id="location">
              City: {results[0].school.city}
              State: {results[0].school.state}
              Zip: {results[0].school.zip}
            </div>
            <div id="total-students">
              Total Number of Students:{' '}
              {enrollment.undergrad_12_month + enrollment.grad_12_month}
            </div>
            <div id="charts">
              <div id="program-chart">
                <DonutChart
                  height={800}
                  width={800}
                  formatValues={(values, total) =>
                    `${((values / total) * 100).toFixed(2)}%`
                  }
                  data={[
                    {
                      label: 'Agriculture',
                      value: programs.agriculture * 100,
                    },
                    {
                      label: 'Architecture',
                      value: programs.agriculture * 100,
                    },
                    {
                      label: 'Biological',
                      value: programs.biological * 100,
                    },
                    {
                      label: 'Business Marketing',
                      value: programs.business_marketing * 100,
                    },
                    {
                      label: 'Communications',
                      value: programs.communication * 100,
                    },
                    {
                      label: 'Computer',
                      value: programs.computer * 100,
                    },
                    {
                      label: 'Education',
                      value: programs.education * 100,
                    },
                    {
                      label: 'Engineering',
                      value: programs.engineering * 100,
                    },
                    {
                      label: 'English',
                      value: programs.english * 100,
                    },
                    {
                      label: 'Ehtnic Cultural Gender',
                      value: programs.ethnic_cultural_gender * 100,
                    },
                    {
                      label: 'Family Consumer Science',
                      value: programs.family_consumer_science * 100,
                    },
                    {
                      label: 'Health',
                      value: programs.health * 100,
                    },
                    {
                      label: 'History',
                      value: programs.history * 100,
                    },
                    {
                      label: 'Humanities',
                      value: programs.humanities * 100,
                    },
                    {
                      label: 'Language',
                      value: programs.language * 100,
                    },
                    {
                      label: 'Legal',
                      value: programs.legal * 100,
                    },
                    {
                      label: 'Mathematics',
                      value: programs.mathematics * 100,
                    },
                    {
                      label: 'Multi-discipline',
                      value: programs.multidiscipline * 100,
                    },
                    {
                      label: 'Parks & Recreation Fitness',
                      value: programs.parks_recreation_fitness * 100,
                    },
                    {
                      label: 'Philosophy/Religion',
                      value: programs.philosophy_religious * 100,
                    },
                    {
                      label: 'Physical Science',
                      value: programs.physical_science * 100,
                    },
                    {
                      label: 'Psychology',
                      value: programs.psychology * 100,
                    },
                    {
                      label: 'Public Administration/Social Service',
                      value:
                        programs.public_administration_social_service * 100,
                    },
                    {
                      label: 'Resources',
                      value: programs.resources * 100,
                    },
                    {
                      label: 'Social Science',
                      value: programs.social_science * 100,
                    },
                    {
                      label: 'Visual/Performing',
                      value: programs.visual_performing * 100,
                    },
                  ]}
                />
              </div>
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
              <div id="income-chart">
                <DonutChart
                  formatValues={(values, total) =>
                    `${((values / total) * 100).toFixed(2)}%`
                  }
                  data={[
                    {
                      label: '$0-$30,000',
                      value: income.share_lowincome['0_30000'] * 100,
                    },
                    {
                      label: '$30,001-$48,000',
                      value: income.share_middleincome['30001_48000'] * 100,
                    },
                    {
                      label: '$48,001-$75,000',
                      value: income.share_middleincome['48001_75000'] * 100,
                    },
                    {
                      label: '$75,001-$110,000',
                      value: income.share_highincome['75001_110000'] * 100,
                    },
                    {
                      label: '$110,001+',
                      value: income.share_highincome['110001plus'] * 100,
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default School;
