import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import Transaction from '../Transaction/Transaction';
import moment from 'moment';

class TransactionList extends Component {
	// function to reorganize data from newest to oldest
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

	render() {
		const { data, type } = this.props;
		let total = 0;
		// sort the transactions and then get a total from all transactions. This works dynamically depending on the data passed down from parent.
		data.sort(this.compare);
		data.forEach(transaction => {
			let amount = Math.round(100 * transaction.amount) / 10;
			total = total + amount;
		});

		let transactions = data.map((transaction, index) => {
			return (
				<Transaction
					key={index}
					transaction={transaction}
					type={this.props.type}
				/>
			);
		});

		return (
			<div className="transactionContainer">
				<Segment.Group className="transactions">
					<Segment>
						Total ${total} {type}
					</Segment>
					<Segment.Group>{transactions}</Segment.Group>
				</Segment.Group>
			</div>
		);
	}
}

export default TransactionList;
