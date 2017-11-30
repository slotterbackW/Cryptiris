import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions/channelActions'
//props.dispatch
//props.match.params.topic

const Messages = ({messages}) => {
	if (Array.isArray(messages)) {
		return messages.map( msg => (<p>{msg}</p>))
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
		console.log(this.props.messages)
		return (
			<div className="messages">
				<h1>Chat for: {this.props.match.params.topic}!</h1>
				<Messages messages={this.props.messages} />
				<textarea placeholder="Press enter to send message" onKeyUp={this.handleKeyPress.bind(this)}/>
			</div>
			)
	}

	componentDidMount() {
		this.props.dispatch(actions.joinChannel(this.props.match.params.topic))
	}
}
export default connect(
    (state) => state.channel
)(Chat)