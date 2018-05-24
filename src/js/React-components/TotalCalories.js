import React from 'react';

export default class TotalCalories extends React.Component {
	render = () => (
		<div className="totalCalories">
			<h4>
				Total Calories:{' '}
				<span> {this.props.totalCalories} </span>
			</h4>
		</div>
	);
}
