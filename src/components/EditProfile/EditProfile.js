import React, { Component } from 'react';
import moment from 'moment';
import { Card, Image, Label, Icon, Input, Button } from 'semantic-ui-react';

class EditProfile extends Component {
	render() {
		const { user, email, city, name } = this.props;
		let date = moment(user.memberSince).format('MMMM Do YYYY');

		return (
			<Card>
				<Image src="https://i.pinimg.com/originals/b7/21/26/b721265eb826b20e6f91d6643b95c122.jpg" />
				<Card.Content>
					<Card.Header>
						<Input
							fluid
							value={name}
							size="mini"
							name="name"
							onChange={this.props.onInputChange}
						/>
					</Card.Header>
					<Card.Meta>
						<span className="date">Member since: {date}</span>
					</Card.Meta>
					<Card.Description>
						<Input
							fluid
							value={city}
							size="mini"
							name="city"
							onChange={this.props.onInputChange}
						/>
					</Card.Description>
					<Card.Description>
						<Input
							fluid
							value={email}
							size="mini"
							name="email"
							onChange={this.props.onInputChange}
						/>
					</Card.Description>
					<Card.Description className="saveButtons">
						<Button.Group>
							<Button>Cancel</Button>
							<Button.Or />
							<Button positive onClick={this.props.updateProfile}>
								Save
							</Button>
						</Button.Group>
					</Card.Description>
				</Card.Content>
			</Card>
		);
	}
}

export default EditProfile;
