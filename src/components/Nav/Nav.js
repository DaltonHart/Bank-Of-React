import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import './Nav.css';

class Nav extends Component {
	render() {
		const { activeItem } = this.props;

		return (
			<div className="nav">
				<Menu className="nav" size="large">
					<Menu.Item name="Bank of React" />
					<Menu.Menu position="right">
						<Menu.Item
							name="Profile"
							active={activeItem === 'Profile'}
							onClick={this.props.handleItemClick}
						/>
						<Menu.Item
							name="Transactions"
							active={activeItem === 'Transactions'}
							onClick={this.props.handleItemClick}
						/>
					</Menu.Menu>
				</Menu>
			</div>
		);
	}
}

export default Nav;
