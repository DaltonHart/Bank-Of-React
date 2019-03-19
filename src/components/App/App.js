import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import TransactionContainer from '../../containers/transactionContainer';
import Profile from '../Profile/Profile';
import './App.css';

class App extends Component {
	state = {
		user: {},
		activeItem: 'Transactions'
	};

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	fetchUser = () => {
		fetch(`https://bank-of-react-api.herokuapp.com/me`)
			.then(response => response.json())
			.then(data => this.setState({ user: data }))
			.catch(error => console.log(error));
	};

	componentDidMount() {
		this.fetchUser();
	}

	render() {
		const { activeItem, user } = this.state;

		let views =
			activeItem === 'Transactions' ? (
				<TransactionContainer />
			) : (
				<Profile user={user} />
			);

		return (
			<div className="app">
				<Nav
					handleItemClick={this.handleItemClick}
					activeItem={this.state.activeItem}
				/>
				<div className="container">
					<Profile user={user} />
					<TransactionContainer />
				</div>
			</div>
		);
	}
}

export default App;
