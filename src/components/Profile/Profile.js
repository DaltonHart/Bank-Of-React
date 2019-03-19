import React, { Component } from 'react';
import moment from 'moment';
import { Card, Image } from 'semantic-ui-react';
import './Profile.css';

class Profile extends Component {
	render() {
		const { user } = this.props;
		let date = moment(user.memberSince).format('MMMM Do YYYY');

		return (
			<div className="profile">
				<Card>
					<Image src="https://i.pinimg.com/originals/b7/21/26/b721265eb826b20e6f91d6643b95c122.jpg" />
					<Card.Content>
						<Card.Header>{user.name}</Card.Header>
						<Card.Meta>
							<span className="date">Member since: {date}</span>
						</Card.Meta>
						<Card.Description>{user.city}</Card.Description>
						<Card.Description>{user.email}</Card.Description>
					</Card.Content>
				</Card>
			</div>
		);
	}
}

export default Profile;
