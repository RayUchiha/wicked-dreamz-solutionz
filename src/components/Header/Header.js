import React from 'react';
import classes from './Header.module.css';
import Navbar from '../Navigation/Navbar/Navbar';
import Submenu from '../Submenu/Submenu';
import { useGlobalContext } from '../../context';

const Header = (props) => {
	const {closeSubmenu} = useGlobalContext();
	return (
		<div>
			<Navbar />
			<header className={classes.Header} onMouseOver={closeSubmenu}>
				<h1>Header</h1>
			</header>
			<Submenu />
		</div>
	);
};


export default Header;
