import React from 'react';
import Item from './Item';
export default class Items extends React.Component {
	render = () => (
		<ul className="collection">
			{this.props.items.map(item => (
				<Item
					key={item.id}
					food={item.food}
					id={item.id}
					calories={item.calories}
					handeleDeleteItem={this.props.handeleDeleteItem}
					handleEditState={this.props.handleEditState}
				/>
			))}
		</ul>
	);
}
