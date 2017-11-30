const initialState = {
	loading: false,
	messages: [],
	channel: {},
	error: null,
}

function channel(state = initialState, action) {
	switch (action.type) {
		case "JOIN_ATTEMPT":
			return {...state, loading: true}
		case "JOIN_FAIL":
			return {...state, loading: false}
		case "JOIN_SUCCESS":
			return {...state, loading: false, channel: action.channel}
		case "NEW_MESSAGE":
			return {...state, messages: state.messages.concat(action.message)}
		default:
			return state
	}
}

export default channel