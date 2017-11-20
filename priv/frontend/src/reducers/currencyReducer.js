import * as actions from '../actions/currencyActions'

const initialState = {
	loading: false,
	prices: null,
	codes: [],
	error: null,
}

function currencies(state = initialState, action) {
	switch (action.type) {
		case actions.GET_HISTORICAL_ATTEMPTING:
			return {...state, loading: true}
		case actions.GET_HISTORICAL_SUCCESS:
			return {...state, loading: false, prices: action.data}
		case actions.GET_HISTORICAL_FAILURE:
			return {...state, loading: false, error: action.error}
		case actions.GET_FOLLOWING_ATTEMPTING:
			return {...state, loading: true}
		case actions.GET_FOLLOWING_SUCCESS:
			return {...state, loading: false, codes: action.data}
		case actions.GET_FOLLOWING_FAILURE:
			return {...state, loading: false, error: action.error}
		case actions.CREATE_FOLLOWING_ATTEMPTING:
			return {...state, loading: true}
		case actions.CREATE_FOLLOWING_SUCCESS:
			return {...state, loading: false, codes: state.codes.concat(action.data)}
		case actions.CREATE_FOLLOWING_FAILURE:
			return {...state, loading: false, error: action.error}
		case actions.DELETE_FOLLOWING_ATTEMPTING:
			return {...state, loading: true}
		case actions.DELETE_FOLLOWING_SUCCESS:
			return {...state, loading: false, codes: state.codes.filter((e) => e !== action.data)}
		case actions.DELETE_FOLLOWING_FAILURE:
			return {...state, loading: false, error: action.error}
		default:
			return state
	}
}

export default currencies