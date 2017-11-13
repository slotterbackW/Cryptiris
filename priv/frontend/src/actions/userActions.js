import api from '../utils/api'

export const CREATE_USER_ATTEMPTING = 'CREATE_USER_ATTEMPTING'
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS'
export const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE'

function createUserSuccess(data) {
	return {
		type: CREATE_USER_SUCCESS,
		data
	}
}

function createUserFailure(error) {
	return {
		type: CREATE_USER_FAILURE,
		error
	}
}

export const GET_USER_ATTEMPTING = 'GET_USER_ATTEMPTING'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER_FAILURE = 'GET_USER_FAILURE'

function getUserSuccess(data) {
	return {
		type: GET_USER_SUCCESS,
		data
	}
}

function getUserFailure(error) {
	return {
		type: GET_USER_FAILURE,
		error
	}
}

export const UPDATE_USER_ATTEMPTING = 'UPDATE_USER_ATTEMPTING'
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS'
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE'

function updateUserSuccess(data) {
	return {
		type: UPDATE_USER_SUCCESS,
		data
	}
}

function updateUserFailure(error) {
	return {
		type: UPDATE_USER_FAILURE,
		error
	}
}

export const DELETE_USER_ATTEMPTING = 'DELETE_USER_ATTEMPTING'
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS'
export const DELETE_USER_FAILURE = 'DELETE_USER_FAILURE'

function deleteUserSuccess(data) {
	return {
		type: DELETE_USER_SUCCESS,
		data
	}
}

function deleteUserFailure(error) {
	return {
		type: DELETE_USER_FAILURE,
		error
	}
}

// ------- USE THESE ACTION CREATORS --------

export function createUser(email, password, password_confirmation) {
	return (dispatch) => {
		dispatch({
			type: CREATE_USER_ATTEMPTING
		})
		return api.createUser(email, password, password_confirmation).then((data) => {
			dispatch(createUserSuccess(data))
		}).catch((error) => dispatch(createUserFailure(error)))
	}
}

export function getUser() {
	return (dispatch) => {
		dispatch({
			type: GET_USER_ATTEMPTING
		})
		return api.getUser().then((data) => {
			dispatch(getUserSuccess(data))
		}).catch((error) => dispatch(getUserFailure(error)))
	}
}

export function updateUser(id, email, password, password_confirmation) {
	return (dispatch) => {
		dispatch({
			type: UPDATE_USER_ATTEMPTING
		})
		return api.updateUser(id, email, password, password_confirmation).then((data) => {
			dispatch(updateUserSuccess(data))
		}).catch((error) => dispatch(updateUserFailure(error)))
	}
}

export function deleteUser(id) {
	return (dispatch) => {
		dispatch({
			type: DELETE_USER_ATTEMPTING
		})
		return api.deleteUser(id).then((data) => {
			dispatch(deleteUserSuccess(data))
		}).catch((error) => dispatch(deleteUserFailure(error)))
	}
}
