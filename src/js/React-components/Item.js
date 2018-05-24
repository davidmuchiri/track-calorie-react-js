import React from 'react';
import FaEdit from 'react-icons/lib/md/create';
import FaClose from 'react-icons/lib/md/clear';

export default class Item extends React.Component {
	render = () => (
		<li className="collection__item">
			<div className="collection__item--primary">
				<strong>{this.props.food} </strong>
				<em>{this.props.calories} calories</em>
			</div>
			<div className="collection__item--secondary">
				<FaEdit
					onClick={e => {
						this.props.handleEditState(this.props.id);
					}}
					className="icon icon__edit"
				/>
				<FaClose
					onClick={e => {
						this.props.handeleDeleteItem(
							this.props.id,
							this.props.calories
						);
					}}
					className="icon icon__close"
				/>
			</div>
		</li>
	);
}
