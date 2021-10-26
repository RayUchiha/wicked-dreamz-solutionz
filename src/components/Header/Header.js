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
				<div className={classes.head__banner}>
					<h1>Wicked Dreamz Digital So|utionz!</h1>
					<h3>Fully Responsive Web Apps</h3>
					<div className={classes.banner__text}>
						<hr />
						<p>networks</p>
					</div>
				</div>
			</header>
			<Submenu />
		</div>
			/*
			<div id="head__banner">
				<h1>Wicked Dreamz </h1>
				<p>Fully Responsive Web Apps</p>
				<div class="banner-text">
					<hr />
					{networks}
				</div>
			</div>
			*/
	);
};


export default Header;
