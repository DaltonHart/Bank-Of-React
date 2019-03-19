import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import Transaction from '../components/Transaction/Transaction';
import moment from 'moment';
import './transactionContainer.css';

let baseURL = `https://bank-of-react-api.herokuapp.com`;

class TransactionContainer extends Component {
	state = {
		debit: [],
		credit: []
	};

	compare = (a, b) => {
		const dateA = moment(a.date);
		const dateB = moment(b.date);
		let comparison = 0;
		if (dateA > dateB) {
			comparison = -1;
		} else if (dateA < dateB) {
			comparison = +1;
		}
		return comparison;
	};

	fetchDebit = () => {
		fetch(`${baseURL}/debits`)
			.then(response => response.json())
			.then(data => {
				data.sort(this.compare);
				this.setState({ debit: data });
			})
			.catch(error => console.log(error));
	};

	fetchCredit = () => {
		fetch(`${baseURL}/credits`)
			.then(response => response.json())
			.then(data => {
				data.sort(this.compare);
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

		let debits = debit.map((transaction, index) => {
			return <Transaction key={index} transaction={transaction} type="Debit" />;
		});

		let credits = credit.map((transaction, index) => {
			return (
				<Transaction key={index} transaction={transaction} type="Credit" />
			);
		});

		return (
			<div className="transactionContainer">
				<Segment.Group className="transactions">
					<Segment>Header</Segment>
					<Segment.Group>{debits}</Segment.Group>
				</Segment.Group>
				<Segment.Group className="transactions">
					<Segment>Header</Segment>
					<Segment.Group>{credits}</Segment.Group>
				</Segment.Group>
			</div>
		);
	}
}

export default TransactionContainer;
