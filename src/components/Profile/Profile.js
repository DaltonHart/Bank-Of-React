import React, { Component } from 'react';
import moment from 'moment';
import EditProfile from '../EditProfile/EditProfile';
import { Card, Image, Label, Icon } from 'semantic-ui-react';
import './Profile.css';

class Profile extends Component {
	state = {
		updating: false
	};

	updateProfile = () => {
		// Will not work due to blocking by CORS. Would have to deploy the project to work properly
		// const formData = new FormData();
		// formData.append('name', this.state.name);
		// formData.append('email', this.state.email);
		// formData.append('city', this.state.city);
		// fetch('https://bank-of-react-api.herokuapp.com/me', {
		// 	method: 'PATCH',
		// 	body: formData,
		// 	mode: 'cors'
		// })
		// 	.then(response => response.json())
		// 	.then(data => console.log(data))
		// 	.catch(function(error) {
		// 		console.log('Looks like there was a problem: \n', error);
		// 	});

		this.setState({
			updating: false
		});

		// as a dev work around I am updating state as so to reflect represent the changes that would occur.
		let user = {
			email: this.state.email,
			name: this.state.name,
			city: this.state.city,
			date: this.props.user.date
		};
		this.props.updateUser(user);
	};

	onInputChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	editProfile = () => {
		//setting the inital input values via the information passed down from parent
		this.setState({
			updating: true,
			email: this.props.user.email,
			name: this.props.user.name,
			city: this.props.user.city
		});
	};

	render() {
		const { user } = this.props;
		const { updating, email, city, name } = this.state;
		let date = moment(user.memberSince).format('MMMM Do YYYY');

		// swapping edit forms vs the default card based on an edit state
		let view = updating ? (
			<EditProfile
				user={user}
				onInputChange={this.onInputChange}
				editProfile={this.editProfile}
				updateProfile={this.updateProfile}
				email={email}
				city={city}
				name={name}
			/>
		) : (
			<Card>
				<Image src="https://i.pinimg.com/originals/b7/21/26/b721265eb826b20e6f91d6643b95c122.jpg" />
				<Card.Content>
					<Card.Header>
						{user.name}
						<Label attached="bottom right" as="a" onClick={this.editProfile}>
							<Icon name="edit" />
						</Label>
					</Card.Header>
					<Card.Meta>
						<span className="date">Member since: {date}</span>
					</Card.Meta>
					<Card.Description>{user.city}</Card.Description>
					<Card.Description>{user.email}</Card.Description>
				</Card.Content>
			</Card>
		);

		return <div className="profile">{view}</div>;
	}
}

export default Profile;
