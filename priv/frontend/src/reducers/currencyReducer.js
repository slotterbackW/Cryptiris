import * as actions from '../actions/currencyActions'

const initialState = {
	loading: false,
	prices: null,
	error: null,
}

function currencies(state = initialState, action) {
	switch (action.type) {
		case actions.GET_HISTORICAL_ATTEMPTING:
			return {...state, loading: true}
		case actions.GET_HISTORICAL_ATTEMPTING:
			return {...state, loading: false, prices: action.data}
		case actions.GET_HISTORICAL_ATTEMPTING:
			return {...state, loading: false, error: action.error}
		default:
			return state
	}
}

export default currencies