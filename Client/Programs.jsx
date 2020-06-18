import React from 'react';
import DonutChart from 'react-donut-chart';
import GetAppIcon from '@material-ui/icons/GetApp';

export default class Programs extends React.Component {
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
      const programs = results[0].latest.academics.program_percentage;
      const blob = new Blob([JSON.stringify(programs)], {
        type: 'application/json',
      });
      return (
        <div style={programStyle}>
          <div style={headingStyle}>
            <h2>Program Breakdown</h2>
            <GetAppIcon
              cursor={'pointer'}
              onClick={() => saveAs(blob, 'ProgramData.csv')}
            />
          </div>
          <div id="program-chart" style={chartStyle}>
            <DonutChart
              height={750}
              width={750}
              legend={false}
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
                  value: programs.public_administration_social_service * 100,
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
        </div>
      );
    }
  }
}

const programStyle = {
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
  padding: 25,
};
