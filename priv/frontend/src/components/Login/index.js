import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Form, Field } from 'simple-react-form'
import { PasswordField, EmailField } from '../FormComponents/TextFields'
import * as actions from '../../actions/sessionActions'

class Login extends React.Component {
    onSubmit = ({email, password}) => {
        this.props.dispatch(actions.login(email, password))
    }

    state = {}

    render() {
        if (this.props.loading) {
            return (
                <div className="container">
                    <div className="flex-center">
                        <h1>Login</h1>
                    </div>
                    <p> loading ... </p>
                </div>
            )
        } else if (this.props.error) {
            return (
                <div className="container">
                    <div className="flex-center">
                        <h1>Login</h1>
                    </div>
                    <p>Error: {this.props.error.toString()} </p>
                    <Form ref='form' state={this.props.initialDoc} onSubmit={this.onSubmit}>
						<Field fieldName='email' label='Email' type={EmailField} />
						<Field fieldName='password' label='Password' type={PasswordField} />
                        <div className="flex-center">
                            <button onClick={() => this.refs.form.submit()} className="btn">Login</button>
                        </div>
                    </Form>
                </div>
            )
        } else {
            return (
                <div className="container">
                    <div className="flex-center">
                        <h1>Login</h1>
                    </div>
                    <Form ref='form' state={this.props.initialDoc} onSubmit={this.onSubmit}>
                        <Field fieldName='email' label='Email' type={EmailField} />
                        <Field fieldName='password' label='Password' type={PasswordField} />
                        <div className="flex-center">
                            <button onClick={() => this.refs.form.submit()} className="btn">Login</button>
                        </div>
                    </Form>
                </div>
            )
        }
    }
}

export default connect(
    (state) => state.session
)(Login)
