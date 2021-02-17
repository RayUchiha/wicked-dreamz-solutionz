import React from 'react';
import classes from './Header.module.css';
import Navbar from '../Navigation/Navbar/Navbar';
import Submenu from '../Submenu/Submenu';
import miamiImg from '../../assets/tropical_miami.jpg';
import { useGlobalContext } from '../../context';

const Header = (props) => {
	const {closeSubmenu} = useGlobalContext();
	return (
		<div className={classes.Header__Navbar}>
			<Navbar />
			<header className={classes.Header} onMouseOver={closeSubmenu}>
				<h1>Welcome to Wicked Dreamz Digital So|utionz!</h1>
			</header>
			<Submenu />
		</div>
	);
};


export default Header;
