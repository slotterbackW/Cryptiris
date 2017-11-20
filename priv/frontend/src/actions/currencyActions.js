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
		return api.follow(code, user_id).then( (data) => {
			dispatch(createFollowingSuccess(code))
		}).catch((error) => dispatch(createFollowingFailure(error)))
	}
}

export function unfollow(code) {
	return (dispatch) => {
		dispatch({
			type: DELETE_FOLLOWING_ATTEMPTING
		})
		return api.unfollow(id).then( (data) => {
			dispatch(deleteFollowingSuccess(code))
		}).catch((error) => dispatch(deleteFollowingFailure(error)))
	}
}