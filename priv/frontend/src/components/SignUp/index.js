import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Form, Field } from 'simple-react-form'
import { PasswordField, EmailField } from '../FormComponents/TextFields'
import * as actions from '../../actions/userActions'

class SignUp extends React.Component {
 // ({loading, user, error}) => {

	onSubmit = ({email, password, password_confirmation}) => {
		this.props.dispatch(actions.createUser(email, password, password_confirmation))
	}

	state = {}

	render() {
		if (this.props.loading) {
			return (
					<div className="container">
						<h1>Sign Up</h1>
						<p> loading ... </p>
					</div>
			)
		} else if (this.props.error) {
			const errorStyle = {
				color: "red"
			}
			return (
					<div className="container">
						<h1>Sign Up</h1>
						<p style={errorStyle}>There was an issue creating an account. Please try again! </p>
						<Form ref='form' state={this.props.initialDoc} onSubmit={this.onSubmit}>
							<Field fieldName='email' label='Email' type={EmailField} />
							<Field fieldName='password' label='Password' type={PasswordField} />
							<Field fieldName='password_confirmation' label='Confirm password' type={PasswordField} />
						</Form>
						<button onClick={() => this.refs.form.submit()}>Submit</button>
					</div>
			)
		} else {
			return (
					<div className="container">
						<h1>Sign Up</h1>
						<Form ref='form' state={this.props.initialDoc} onSubmit={this.onSubmit}>
							<Field fieldName='email' label='Email' type={EmailField} />
							<Field fieldName='password' label='Password' type={PasswordField} />
							<Field fieldName='password_confirmation' label='Confirm password' type={PasswordField} />
						</Form>
						<button onClick={() => this.refs.form.submit()}>Submit</button>
					</div>
			)
		}
	}
}

export default connect(
	(state) => state.user
)(SignUp)
