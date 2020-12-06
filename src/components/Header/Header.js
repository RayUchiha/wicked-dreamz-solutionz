import React, { Component } from 'react';
import classes from './Header.module.css';
import Navbar from '../Navigation/Navbar/Navbar';

class Header extends Component {
	render () {
		return (
			<div>
				<Navbar />
				<header className={classes.Header}>
					<h1>Header</h1>
				</header>
			</div>
		);
	}
}

export default Header;
