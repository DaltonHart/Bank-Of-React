import React, { Component } from 'react';
import './transactionContainer.css';
import TransactionList from '../components/TransactionList/TransactionList';

//Storing base url for reference across multiple routes
let baseURL = `https://bank-of-react-api.herokuapp.com`;

class TransactionContainer extends Component {
	state = {
		debit: [],
		credit: []
	};

	fetchDebit = () => {
		fetch(`${baseURL}/debits`)
			.then(response => response.json())
			.then(data => {
				this.setState({ debit: data });
			})
			.catch(error => console.log(error));
	};

	fetchCredit = () => {
		fetch(`${baseURL}/credits`)
			.then(response => response.json())
			.then(data => {
				this.setState({ credit: data });
			})
			.catch(error => console.log(error));
	};

	// On mount fetch both credit and debit transactions
	componentDidMount() {
		this.fetchDebit();
		this.fetchCredit();
	}

	render() {
		const { debit, credit } = this.state;

		return (
			<div className="transactionContainer">
				{/* With one Component we can create both Transaction lists passing down the data */}
				<TransactionList data={debit} type="Debit" />
				<TransactionList data={credit} type="Credit" />
			</div>
		);
	}
}

export default TransactionContainer;
