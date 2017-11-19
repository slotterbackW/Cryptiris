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