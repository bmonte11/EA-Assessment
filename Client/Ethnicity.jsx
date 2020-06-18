import React from 'react';
import DonutChart from 'react-donut-chart';

export default class Ethnicity extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const students = this.props.students;
		return (
			<div id="ethnicity-chart">
				<DonutChart
					height={300}
					width={400}
					data={[
						{
							label: 'White',
							value: students.white * 100
						},
						{
							label: 'Black',
							value: students.black * 100
						},
						{
							label: 'Aian',
							value: students.aian * 100
						},
						{
							label: 'Asian',
							value: students.asian * 100
						},
						{
							label: 'Hispanic',
							value: students.hispanic * 100
						},
						{
							label: 'NHPI',
							value: students.nhpi * 100
						},
						{
							label: 'Non-resident Alien',
							value: students.non_resident_alien * 100
						},
						{
							label: 'Two or More',
							value: students.two_or_more * 100
						},
						{
							label: 'Unknown',
							value: students.unknown * 100
						}
					]}
				/>
			</div>
		);
	}
}
