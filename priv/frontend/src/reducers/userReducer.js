import * as actions from '../actions/userActions'

const initialState = {
	loading: false,
	user: null,
	error: null,
}

function users(state = initialState, action) {
	switch (action.type) {
		case actions.CREATE_USER_ATTEMPTING:
			return { ...state, loading: true}
		case actions.CREATE_USER_SUCCESS:
			return { ...state, loading: false, user: action.data}
		case actions.CREATE_USER_FAILURE:
			return { ...state, loading: false, error: action.error}
		case actions.GET_USER_ATTEMPTING:
			return { ...state, loading: true}
		case actions.GET_USER_SUCCESS:
			return { ...state, loading: false, user: action.data}
		case actions.GET_USER_FAILURE:
			return { ...state, loading: false, error: action.error}
		case actions.UPDATE_USER_ATTEMPTING:
			return { ...state, loading: true}
		case actions.UPDATE_USER_SUCCESS:
			return { ...state, loading: false, user: action.data}
		case actions.UPDATE_USER_FAILURE:
			return { ...state, loading: false, error: action.error}
		case actions.DELETE_USER_ATTEMPTING:
			return { ...state, loading: true}
		case actions.DELETE_USER_SUCCESS:
			return { ...state, loading: false, user: null }
		case actions.DELETE_USER_FAILURE:
			return { ...state, loading: false, error: action.error}
		default:
			return state
	}
}

export default users