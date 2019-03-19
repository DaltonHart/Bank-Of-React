import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import TransactionContainer from '../../containers/transactionContainer';
import Profile from '../Profile/Profile';
import './App.css';

class App extends Component {
	state = {
		user: {}
	};

	fetchUser = () => {
		fetch(`https://bank-of-react-api.herokuapp.com/me`)
			.then(response => response.json())
			.then(data => this.setState({ user: data }))
			.catch(error => console.log(error));
	};
	// on mount fetch user information
	componentDidMount() {
		this.fetchUser();
	}
	// update the user based on the information passed to it from child component
	updateUser = userupdated => {
		this.setState({
			user: userupdated
		});
	};

	render() {
		const { user } = this.state;

		return (
			<div className="app">
				{/* base nav is set with user information displayed to show unidirectional data flow */}
				<Nav user={user} />
				<div className="container">
					{/* passing down function to update the user and default user value */}
					<Profile user={user} updateUser={this.updateUser} />
					{/* Container to fetch transactions and create lists */}
					<TransactionContainer />
				</div>
			</div>
		);
	}
}

export default App;
