import React, { Component } from 'react';
import './transactionContainer.css';
import TransactionList from '../components/TransactionList/TransactionList';

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

	componentDidMount() {
		this.fetchDebit();
		this.fetchCredit();
	}

	render() {
		const { debit, credit } = this.state;

		return (
			<div className="transactionContainer">
				<TransactionList data={debit} type="Debit" />
				<TransactionList data={credit} type="Credit" />
			</div>
		);
	}
}

export default TransactionContainer;
