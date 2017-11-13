import * as actions from '../actions/sessionActions'

const initialState = {
	loading: false,
	user: null,
	error: null,
}

function sessions(state = initialState, action) {
	switch (action.type) {
		case actions.LOGIN_ATTEMPTING:
			return { ...state, loading: true}
		case actions.LOGIN_SUCCESS:
			return { ...state, loading: false, user: action.data}
		case actions.LOGIN_FAILURE:
			return { ...state, loading: false, error:  action.error}
		case actions.LOGOUT_ATTEMPTING:
			return { ...state, loading: true}
		case actions.LOGOUT_SUCCESS:
			return { ...state, loading: false, user: null}
		default:
			return state
	}
}

export default sessions