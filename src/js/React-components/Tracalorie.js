import React from 'react';
import Header from './Header';
import AddMeal from './AddMeal';
import TotalCalories from './TotalCalories';
import Items from './Items';

export default class Tracalorie extends React.Component {
	state = {
		items: [],
		totalCalories: 0,
		editState: undefined,
		itemToUpdate: undefined
	};

	handleAddFoodItem = foodItem => {
		if (!foodItem.food && !foodItem.calories) {
			return 'Enter a meal and its calories';
		}
		this.setState(prevState => ({
			items: prevState.items.concat(foodItem),
			totalCalories:
				parseInt(prevState.totalCalories) +
				parseInt(foodItem.calories)
		}));
	};

	handleUpdatedFoodItem = (id, foodItem) => {
		let totalCalories = 0;

		let items = this.state.items.map(item => {
			if (item.id == id) {
				item = foodItem;
			}
			return item;
		});
		items.forEach(item => {
			totalCalories += parseInt(item.calories);
		});
		this.setState(prevState => ({
			editState: undefined,
			items: items,
			itemToUpdate: undefined,
			totalCalories: totalCalories
		}));
	};

	handeleDeleteItem = (id, calories) => {
		this.setState(prevState => ({
			items: prevState.items.filter(foodItem => foodItem.id !== id),
			totalCalories:
				parseInt(prevState.totalCalories) - parseInt(calories)
		}));
	};

	handleDeleteAllItems = () => {
		this.setState(() => ({ items: [], totalCalories: 0 }));
	};

	handleEditState = id => {
		return this.state.items.forEach(item => {
			if (item.id === id) {
				this.setState(() => ({
					editState: true,
					itemToUpdate: item
				}));
			}
		});
	};

	clearEditState = () => {
		this.setState(() => ({
			editState: undefined,
			itemToUpdate: undefined
		}));
	};

	componentDidMount = () => {
		try {
			const items = JSON.parse(localStorage.getItem('foodItems'));
			let totalCalories = 0;
			items.forEach(item => {
				totalCalories += parseInt(item.calories);
			});
			if (items) {
				this.setState(() => ({ items, totalCalories }));
			}
		} catch (e) {}
	};

	componentDidUpdate = (prevProps, prevState) => {
		if (prevState.items !== this.state.items) {
			const json = JSON.stringify(this.state.items);
			localStorage.setItem('foodItems', json);
		}
	};

	render = () => {
		const title = 'Tracalorie';
		return (
			<div>
				<Header
					title={title}
					handleDeleteAllItems={this.handleDeleteAllItems}
				/>

				<div className="container">
					<AddMeal
						handleAddFoodItem={this.handleAddFoodItem}
						editState={this.state.editState}
						clearEditState={this.clearEditState}
						itemToUpdate={this.state.itemToUpdate}
						handleUpdatedFoodItem={
							this.handleUpdatedFoodItem
						}
					/>

					<TotalCalories
						totalCalories={this.state.totalCalories}
					/>

					<Items
						items={this.state.items}
						handeleDeleteItem={this.handeleDeleteItem}
						handleEditState={this.handleEditState}
					/>
				</div>
			</div>
		);
	};
}
