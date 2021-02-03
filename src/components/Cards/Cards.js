import React from 'react';
import classes from './Cards.module.css';

const Cards = () => {
	return (
		<div className={classes.container}>
			<div className={classes.card}>
				<div className={classes.content}>
					<div className={classes.front}>Front</div>
					<div className={classes.back}>Back!</div>
				</div>
			</div>
			
			<div className={classes.card}>
				<div className={classes.content}>
					<div className={classes.front}>Front</div>
					<div className={classes.back}>
						<blockquote id="socialEmbed" class="twitter-tweet" data-width="100%" data-height="30%" data-theme="light">
							<p lang="und" dir="ltr">
							<a href="https://t.co/iGCFWyYUED">https://t.co/iGCFWyYUED</a>
							<a href="https://t.co/A7cVNH45qm">pic.twitter.com/A7cVNH45qm</a>
							</p>&mdash; IG: FFn_ CoopBihh (@BihhFfn) 
							<a href="https://twitter.com/BihhFfn/status/1143562433698684933?ref_src=twsrc%5Etfw">June 25, 2019</a>
						</blockquote>
					</div>
				</div>
				

			</div>
		</div>
	);
}

export default Cards;
