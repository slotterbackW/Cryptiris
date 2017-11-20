import api from '../utils/api'

export const GET_HISTORICAL_ATTEMPTING = 'GET_HISTORICAL_ATTEMPTING'
export const GET_HISTORICAL_SUCCESS = 'GET_HISTORICAL_SUCCESS'
export const GET_HISTORICAL_FAILURE = 'GET_HISTORICAL_FAILURE'

export function getHistoricalSuccess(data) {
	return {
		type: GET_HISTORICAL_SUCCESS,
		data
	}
}

export function getHistoricalFailure(error) {
	return {
		type: GET_HISTORICAL_FAILURE,
		error
	}
}

export function getHistoricalPrices(cryptoCodes) {
	return (dispatch) => {
		dispatch({
			type: GET_HISTORICAL_ATTEMPTING
		})
		return api.getLastFiveDaysRate(cryptoCodes).then( (data) => {
			dispatch(getHistoricalSuccess(data))
		}).catch((error) => dispatch(getHistoricalFailure(error)))
	}
}

export const GET_FOLLOWING_ATTEMPTING = 'GET_FOLLOWING_ATTEMPTING'
export const GET_FOLLOWING_SUCCESS = 'GET_FOLLOWING_SUCCESS'
export const GET_FOLLOWING_FAILURE = 'GET_FOLLOWING_FAILURE'

export function getFollowingSuccess(data) {
	return {
		type: GET_FOLLOWING_SUCCESS,
		data
	}
}

export function getFollowingFailure(error) {
	return {
		type: GET_FOLLOWING_FAILURE,
		error
	}
}

export function getFollowedCodes() {
	return (dispatch) => {
		dispatch({
			type: GET_FOLLOWING_ATTEMPTING
		})
		return api.getFollowedCodes().then( (data) => {
			dispatch(getFollowingSuccess(data))
		}).catch((error) => dispatch(getFollowingFailure(error)))
	}
}