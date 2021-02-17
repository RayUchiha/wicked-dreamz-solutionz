import React from 'react';
import classes from './Navbar.module.css';
import { useGlobalContext } from '../../../context';

const Navbar = () => {
	const { openSubmenu, closeSubmenu  } = useGlobalContext();
	const displaySubenu = (e) => {
		/*const page = e.target.textContent;*/
		console.log('submenu is visible');
		const page = e.target.textContent;
		/* the tempBtn is mode to track the pointer measurements*/
		const tempBtn = e.target.getBoundingClientRect();
		console.log(tempBtn);
		/*get the midway point of the element by add both size together then dividing*/
		const center = (tempBtn.left + tempBtn.right)/ 2;
		const bottom = tempBtn.bottom - 3;
		
		/*passing data to the submenu function in context*/
		openSubmenu(page,{ center , bottom })
	};
	const handleSubmenu = (e) => {
		const groupClasses = 'Link__Btn';
		if(!e.target.classList === `$groupClasses`) {
			closeSubmenu()
		}
	};
	return (
		<nav className={classes.Nav} onMouseOver={handleSubmenu}>
			<div className={classes.Nav_Center}>
				<ul className={classes.Nav__Links}>
					<li>
						<button className={classes.Link__Btn} onMouseOver={displaySubenu}>
							about
						</button>
					</li>
					<li>
						<button className={classes.Link__Btn} onMouseOver={displaySubenu}>
							services
						</button>
					</li>
					<li>
						<button className={classes.Link__Btn} onMouseOver={displaySubenu}>
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
};

export default Navbar;
