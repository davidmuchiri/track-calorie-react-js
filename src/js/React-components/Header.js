import React from 'react';
import FaDelete from 'react-icons/lib/md/delete-forever';

const Header = props => (
	<nav className="header">
		<div className="container">
			<h1 className="header__title">{props.title}</h1>
			<button
				className="btn btn__clear"
				onClick={props.handleDeleteAllItems}>
				Clear all <FaDelete className="icon, icon__delete" />
			</button>
		</div>
	</nav>
);
Header.defaultProps = {
	title: 'Tracalorie'
};
export default Header;
