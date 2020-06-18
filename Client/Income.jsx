import React from 'react';
import DonutChart from 'react-donut-chart';

export default class Income extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const income = this.props.income;
		return (
			<div id="income-chart">
				<DonutChart
					formatValues={(values, total) => `${(values / total * 100).toFixed(2)}%`}
					data={[
						{
							label: '$0-$30,000',
							value: income.share_lowincome['0_30000'] * 100
						},
						{
							label: '$30,001-$48,000',
							value: income.share_middleincome['30001_48000'] * 100
						},
						{
							label: '$48,001-$75,000',
							value: income.share_middleincome['48001_75000'] * 100
						},
						{
							label: '$75,001-$110,000',
							value: income.share_highincome['75001_110000'] * 100
						},
						{
							label: '$110,001+',
							value: income.share_highincome['110001plus'] * 100
						}
					]}
				/>
			</div>
		);
	}
}
