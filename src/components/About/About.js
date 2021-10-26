import React from 'react';
import classes from './About.module.css';

const about = () => {
	return (
		<section id="main">
			<div className={classes.container}>
				<article className={classes.main__col}>
					<h1 class="page-title">About Us</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu imperdiet ligula. Mauris gravida viverra magna sit amet gravida. Donec ut auctor elit, sed viverra lacus. Aliquam a purus vitae purus interdum cursus. Aenean ac vehicula leo. Vestibulum ultrices diam at orci dignissim, sit amet porta quam ornare. Praesent consectetur ornare libero eget congue. Donec pretium condimentum eros, eu tempus ante varius sit amet.</p>
					<p className={classes.dark}>Ut molestie posuere fermentum. Sed bibendum, augue non gravida placerat, est quam pulvinar ipsum, ut gravida libero diam sed dolor. Aliquam erat volutpat. Sed tellus augue, congue sit amet viverra nec, ultrices nec neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur eu magna dignissim, sollicitudin sapien sit amet, tempor urna. Sed cursus risus sapien. Vestibulum fringilla mauris nisi, eu laoreet diam gravida id. Vivamus lobortis mi est, in iaculis massa rutrum eu. Curabitur augue urna, laoreet ut tempor quis, consectetur rhoncus quam. Etiam accumsan arcu odio, a iaculis elit dignissim ut. Sed vitae consequat nulla.</p>
				</article>
				
				<aside className={classes.sidebar}>
					<div className={classes.dark}>
						<h3>What We Do</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu imperdiet ligula. Mauris gravida viverra magna sit amet gravida. Donec ut auctor elit, sed viverra lacus. Aliquam a purus vitae purus interdum cursus. </p>
					</div>
				</aside>
			</div>
		</section>
	);
};

export default about;
