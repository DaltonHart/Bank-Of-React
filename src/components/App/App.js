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

	componentDidMount() {
		this.fetchUser();
	}

	updateUser = userupdated => {
		this.setState({
			user: userupdated
		});
	};

	render() {
		const { user } = this.state;

		return (
			<div className="app">
				<Nav user={user} />
				<div className="container">
					<Profile user={user} updateUser={this.updateUser} />
					<TransactionContainer />
				</div>
			</div>
		);
	}
}

export default App;
