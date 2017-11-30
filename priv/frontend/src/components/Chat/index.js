import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions/channelActions'
import MainNav from '../MainNav'
import Spinner from '../Spinner'
import './chat.css'
//props.dispatch
//props.match.params.topic

const Messages = ({messages}) => {
	if (Array.isArray(messages)) {
		return messages.map( msg => (<p className="message">{msg}</p>))
	}
	return null
}

class Chat extends React.Component {
	handleKeyPress(e) {
		if (e.keyCode === 13) {
			this.props.dispatch(actions.addMessage(this.props.channel, e.target.value))
			e.target.value = ""
		}
	}

	render() {
		if (this.props.loading) {
			return (
			<div>
				<MainNav />
				<div className="container">
					<h2>Channel: {this.props.match.params.topic}</h2>
					<h3>Joining chat room...</h3>
				</div>
				<Spinner />
			</div>
			)
		} else {
			return (
				<div>
					<MainNav />
					<div className="container">
						<h1>Channel: {this.props.match.params.topic}</h1>
						<div className="messages-container">
							<Messages messages={this.props.messages} />
						</div>
					</div>
					<div className="send-messages-container">
						<div className="container">
							<textarea placeholder="Press enter to send message" onKeyUp={this.handleKeyPress.bind(this)} className="message-textarea"/>
						</div>
					</div>
				</div>
			)
		}
	}

	componentDidMount() {
		this.props.dispatch(actions.joinChannel(this.props.match.params.topic))
	}
}
export default connect(
    (state) => state.channel
)(Chat)