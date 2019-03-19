import React, { Component } from 'react';
import { Card, Label } from 'semantic-ui-react';
import moment from 'moment';

class Transaction extends Component {
	render() {
		const { transaction, type } = this.props;
		let date = moment(transaction.date).format('MMMM Do YYYY');

		return (
			<Card>
				<Card.Content>
					<Card.Header>
						<Label color="red" attached="top right">
							{type}
						</Label>
						{transaction.amount}
					</Card.Header>
				</Card.Content>
				<Card.Content description={transaction.description} />
				<Card.Content extra>{date}</Card.Content>
			</Card>
		);
	}
}

export default Transaction;
