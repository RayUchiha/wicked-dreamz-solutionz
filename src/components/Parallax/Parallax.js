import React from 'react';
import classes from './Parallax.module.css';
import img from '../../assets/showcase.jpg';

//let img = "/home/pi/_Projects/Learning React/src/wicked-dreamz-solutionz/src/assets/showcase.img";

const Parallax = () => {
	
	return (
		<section className={classes.container}>
			<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
			<div className={classes.Parallax} data-parallax="scroll" data-z-index="1" data-image-src={img}>
				<img src={img} />
			</div>
				<h1 className={classes.info}>Wicked Dreamz So|utionz</h1>
			<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
		</section>
	);
}

export default Parallax;
