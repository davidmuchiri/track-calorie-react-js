import React from 'react';
import idGenerator from '../scripts/idGenerator';
import FaArrowLeft from 'react-icons/lib/md/arrow-back';
import FaEdit from 'react-icons/lib/md/create';
import FaPlus from 'react-icons/lib/md/add';
export default class AddMeal extends React.Component {
	state = {
		error: undefined
	};

	checkEditState = () => {
		if (this.props.editState) {
			document.querySelector(
				'#item-name'
			).value = this.props.itemToUpdate.food;
			document.querySelector(
				'#item-calories'
			).value = this.props.itemToUpdate.calories;
		}
	};

	onFormSubmit = () => {
		const food = document.querySelector('#item-name').value.trim();
		const calories = document
			.querySelector('#item-calories')
			.value.trim();

		var id = idGenerator();

		const foodItem = { food, calories, id };

		const error = this.props.handleAddFoodItem(foodItem);
		this.setState(() => ({ error }));

		if (!error) {
			document.querySelector('#item-name').value = '';
			document.querySelector('#item-calories').value = '';
		}
	};

	onUpdateSubmit = () => {
		const food = document.querySelector('#item-name').value.trim();
		const calories = document
			.querySelector('#item-calories')
			.value.trim();

		var id = this.props.itemToUpdate.id;

		const foodItem = { food, calories, id };

		const error = this.props.handleUpdatedFoodItem(id, foodItem);
		this.setState(() => ({ error }));

		if (!error) {
			document.querySelector('#item-name').value = '';
			document.querySelector('#item-calories').value = '';
		}
	};
	clearFields = () => {
		document.querySelector('#item-name').value = '';
		document.querySelector('#item-calories').value = '';
		this.props.clearEditState();
	};

	render = () => (
		<div className="card">
			<div className="card__content">
				<h4 className="card__title">Add Meal / Food Item</h4>
				{this.checkEditState()}
				<form
					className="form"
					onSubmit={e => e.preventDefault()}>
					{this.state.error && (
						<p className="form__error">
							{this.state.error}
						</p>
					)}
					<div className="food__item">
						<label
							htmlFor="item-calories"
							className="input__label">
							Add a meal
						</label>
						<input
							type="text"
							placeholder="Add a meal"
							id="item-name"
							name="meal"
							className="input__field"
						/>
					</div>
					<div className="food__item">
						<label
							htmlFor="item-calories"
							className="input__label">
							Add calories
						</label>
						<input
							type="number"
							placeholder="Add calories"
							id="item-calories"
							name="calories"
							className="input__field"
						/>
					</div>
					{!this.props.editState ? (
						<button
							onClick={this.onFormSubmit}
							className="btn add-btn">
							<FaPlus className="icon icon__add" />
							Add meal
						</button>
					) : (
						<div className="form__editState">
							<button
								onClick={this.onUpdateSubmit}
								className="btn btn__edit">
								<FaEdit className="icon icon__update" />{' '}
								update
							</button>
							<button
								onClick={this.clearFields}
								className="btn btn__back">
								<FaArrowLeft className="icon icon__back" />
								back
							</button>
						</div>
					)}
				</form>
			</div>
		</div>
	);
}
