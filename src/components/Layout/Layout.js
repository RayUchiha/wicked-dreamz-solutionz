import React, { Component } from 'react';
import Aux from '../../hoc/Aux';

class Layout extends Component {
	render () {
		return (
			<Aux>
				<div>
					<h1>Layout Structure</h1>
					{this.props.children}
				</div>
			</Aux>
		);
	}
}

export default Layout;
