import React from 'react';
import classes from './GradientCards.module.css';


const GradientCards = () => {
	return (
		<div className={classes.container}>
			<div className={classes.card}>
				<div className={classes.content}>
					<h3>CyberSecurity Professional</h3>
					<p>
						This section contains descriptions of the security technologies utilized inside our software regarding reliability of the technology inside the apps.
					</p>
				</div>
			</div>
			<div className={classes.card}>
				<div className={classes.content}>
					<h3>Software Developer</h3>
					<p>
						This section contains descriptions of the security technologies utilized inside our software regarding reliability of the technology inside the apps.
					</p>
				</div>
			</div>
		</div>
	)	
}

	
export default GradientCards;
