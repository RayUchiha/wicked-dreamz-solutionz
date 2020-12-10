import React, { useState } from 'react';
import classes from './Contact.module.css';

const Contact = () => {
	return (
		<section className={classes.contact}>
					<form id="contactForm" name="contactForm">
							<div>
								<label htmlFor="contactName">Name <span className={classes.required}>*</span></label>
								<input value="name" type="text" defaultValue="" id="contactName" name="contactName" onChange=""/>
							</div>
							<div>
								<label htmlFor="contactEmail">Email <span className={classes.required}>*</span></label>
								<input value="email" type="text" defaultValue="" id="contactEmail" name="contactEmail" onChange=""/>
							</div>
							<div>
								<label htmlFor="contactSubject">Subject</label>
								<input value="subject" type="text" defaultValue="" id="contactSubject" name="contactSubject" onChange=""/>
							</div>
							<div>
								<label htmlFor="contactMessage">Message <span className={classes.required}>*</span></label>
								<textarea value="message" onChange="" cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
							</div>
							<div>
								<button type="submit" onClick="" className={classes.submit}>Submit</button>
							</div>
					</form>

				<aside className="footer-widgets">
					<div className="widget widget_contact">
						<h4>Address and Phone</h4>
						<p className="address">
							"data?.name"<br />
							"data?.address.street" <br />
							"data?.address.city", "data?.address.state" "data?.address.zip"<br />
							<span>"data?.phone"</span>
						</p>
					</div>
				</aside>
		</section>
	);
}

export default Contact;
