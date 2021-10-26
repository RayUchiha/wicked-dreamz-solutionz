import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class Layout extends Component {
	render () {
		
		return (
			<Aux>
				<div>
					<Header />
					{this.props.children}
					<Footer />
				</div>
			</Aux>
		);
	}
}

export default Layout;
