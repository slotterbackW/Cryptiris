import api from '../utils/api'
import { push } from 'react-router-redux'

export const GET_CRYPTOCURRENCIES_ATTEMPTING = 'GET_CRYPTOCURRENCIES_ATTEMPTING'
export const GET_CRYPTOCURRENCIES_SUCCESS = 'GET_CRYPTOCURRENCIES_SUCCESS'
export const GET_CRYPTOCURRENCIES_FAILURE = 'GET_CRYPTOCURRENCIES_FAILURE'

export function getCryptocurrenciesSuccess(data) {
	return {
		type: GET_CRYPTOCURRENCIES_SUCCESS,
		data
	}
}

export function getCryptocurrenciesFailure(data) {
	return {
		type: GET_CRYPTOCURRENCIES_FAILURE,
		data
	}
}

export function getCryptocurrencies() {
	return (dispatch) => {
		dispatch({
			type: GET_CRYPTOCURRENCIES_ATTEMPTING
		})
		return api.getCryptocurrencies()
		.then(data => {
			dispatch(getCryptocurrenciesSuccess(data))
		}).catch(error => {
			return dispatch(getCryptocurrenciesFailure(error))
		})
	}
}

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

export function loadHistoricalPrices() {
	return async (dispatch) => {
		dispatch({
			type: GET_HISTORICAL_ATTEMPTING
		})
		try {
			const codes = await api.getFollowedCodes()
			dispatch(getFollowingSuccess(codes.data))
			dispatch({
			type: GET_HISTORICAL_ATTEMPTING
			})
			const fiveDays = await api.getLastFiveDaysRate(codes.data)
			dispatch(getHistoricalSuccess(fiveDays.data))
		} catch(error) {
			return dispatch(getHistoricalFailure(error))
		}
	}
}

export const GET_FOLLOWING_ATTEMPTING = 'GET_FOLLOWING_ATTEMPTING'
export const GET_FOLLOWING_SUCCESS = 'GET_FOLLOWING_SUCCESS'
export const GET_FOLLOWING_FAILURE = 'GET_FOLLOWING_FAILURE'

export const CREATE_FOLLOWING_ATTEMPTING = 'CREATE_FOLLOWING_ATTEMPTING'
export const CREATE_FOLLOWING_SUCCESS = 'CREATE_FOLLOWING_SUCCESS'
export const CREATE_FOLLOWING_FAILURE = 'CREATE_FOLLOWING_FAILURE'

export const DELETE_FOLLOWING_ATTEMPTING = 'DELETE_FOLLOWING_ATTEMPTING'
export const DELETE_FOLLOWING_SUCCESS = 'DELETE_FOLLOWING_SUCCESS'
export const DELETE_FOLLOWING_FAILURE = 'DELETET_FOLLOWING_FAILURE'

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

export function createFollowingSuccess(data) {
	return {
		type: CREATE_FOLLOWING_SUCCESS,
		data
	}
}

export function createFollowingFailure(error) {
	return {
		type: CREATE_FOLLOWING_FAILURE,
		error
	}
}

export function deleteFollowingSuccess(data) {
	return {
		type: DELETE_FOLLOWING_SUCCESS,
		data
	}
}

export function deleteFollowingFailure(error) {
	return {
		type: DELETE_FOLLOWING_FAILURE,
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

export function follow(code) {
	return (dispatch) => {
		dispatch({
			type: CREATE_FOLLOWING_ATTEMPTING
		})
		return api.follow(code).then( (data) => {
			dispatch(createFollowingSuccess(code))
			dispatch(push('/dashboard'))
		}).catch((error) => dispatch(createFollowingFailure(error)))
	}
}

export function unfollow(code) {
	return (dispatch) => {
		dispatch({
			type: DELETE_FOLLOWING_ATTEMPTING
		})
		return api.unfollow(code).then( (data) => {
			dispatch(deleteFollowingSuccess(code))
			dispatch(push('/dashboard'))
		}).catch((error) => dispatch(deleteFollowingFailure(error)))
	}
}

export function chat(code) {
	return (dispatch) => { dispatch(push('/chat/' + code)) }
}