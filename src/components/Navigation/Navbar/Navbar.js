import React from 'react';
import classes from './Navbar.module.css';

const navbar = () => {
	return (
		<nav className={classes.Nav}>
			<div className={classes.Nav_Center}>
				<ul className={classes.Nav__Links}>
					<li>
						<button className={classes.Link__Btn}>
							products
						</button>
					</li>
					<li>
						<button className={classes.Link__Btn}>
							devlopers
						</button>
					</li>
					<li>
						<button className={classes.Link__Btn}>
							company
						</button>
					</li>
				</ul>
			</div>
			<button className={`${classes.Btn} ${classes.Signin__Btn}`}>
				Sign In
			</button>
		</nav>
	);
}

export default navbar;
