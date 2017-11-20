import * as actions from '../actions/currencyActions'

const initialState = {
	loading: false,
	prices: null,
	codes: null,
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
		default:
			return state
	}
}

export default currencies