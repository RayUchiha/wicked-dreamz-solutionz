import React, { Component } from 'react';
import classes from './Footer.module.css';

class Footer extends Component {
	render () {
		return (
				<footer className={classes.Footer}>
					<div>
						<div>
							<ul className={classes.SocialLinks}>
							  <p>networks</p>
							</ul>

							<ul>
							<li>Modified with love by the Clever Programmer team ♥️</li>
							</ul>

							<ul className={classes.Copyright}>
							  <li>Wicked Dreamz Web Design, Copyright &copy; 2020</li>
							  <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
							</ul>
						</div>
						<div id="go-top"><a title="Back to Top" href="#home"><i class="fa fa-chevron-circle-up fa-3x"></i></a></div>
					</div>
				</footer>
		);
	}
}


export default Footer;
