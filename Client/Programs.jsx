import React from 'react';
import DonutChart from 'react-donut-chart';

export default class Programs extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const programs = this.props.programs;
		return (
			<div id="program-chart">
				<DonutChart
					height={800}
					width={800}
					formatValues={(values, total) => `${(values / total * 100).toFixed(2)}%`}
					data={[
						{
							label: 'Agriculture',
							value: programs.agriculture * 100
						},
						{
							label: 'Architecture',
							value: programs.agriculture * 100
						},
						{
							label: 'Biological',
							value: programs.biological * 100
						},
						{
							label: 'Business Marketing',
							value: programs.business_marketing * 100
						},
						{
							label: 'Communications',
							value: programs.communication * 100
						},
						{
							label: 'Computer',
							value: programs.computer * 100
						},
						{
							label: 'Education',
							value: programs.education * 100
						},
						{
							label: 'Engineering',
							value: programs.engineering * 100
						},
						{
							label: 'English',
							value: programs.english * 100
						},
						{
							label: 'Ehtnic Cultural Gender',
							value: programs.ethnic_cultural_gender * 100
						},
						{
							label: 'Family Consumer Science',
							value: programs.family_consumer_science * 100
						},
						{
							label: 'Health',
							value: programs.health * 100
						},
						{
							label: 'History',
							value: programs.history * 100
						},
						{
							label: 'Humanities',
							value: programs.humanities * 100
						},
						{
							label: 'Language',
							value: programs.language * 100
						},
						{
							label: 'Legal',
							value: programs.legal * 100
						},
						{
							label: 'Mathematics',
							value: programs.mathematics * 100
						},
						{
							label: 'Multi-discipline',
							value: programs.multidiscipline * 100
						},
						{
							label: 'Parks & Recreation Fitness',
							value: programs.parks_recreation_fitness * 100
						},
						{
							label: 'Philosophy/Religion',
							value: programs.philosophy_religious * 100
						},
						{
							label: 'Physical Science',
							value: programs.physical_science * 100
						},
						{
							label: 'Psychology',
							value: programs.psychology * 100
						},
						{
							label: 'Public Administration/Social Service',
							value: programs.public_administration_social_service * 100
						},
						{
							label: 'Resources',
							value: programs.resources * 100
						},
						{
							label: 'Social Science',
							value: programs.social_science * 100
						},
						{
							label: 'Visual/Performing',
							value: programs.visual_performing * 100
						}
					]}
				/>
			</div>
		);
	}
}