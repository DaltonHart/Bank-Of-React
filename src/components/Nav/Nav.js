import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import './Nav.css';

class Nav extends Component {
	render() {
		const { user } = this.props;

		return (
			<div className="nav">
				<Menu className="nav" size="large">
					<Menu.Item name="Bank of React" />
					<Menu.Menu position="right">
						<Menu.Item name={`Welcome back ${user.name}!`} />
					</Menu.Menu>
				</Menu>
			</div>
		);
	}
}

export default Nav;
