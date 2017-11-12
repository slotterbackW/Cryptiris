import api from '../utils/api'

export const LOGIN_ATTEMPTING = 'LOGIN_ATTEMPTING'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export function loginSuccess(data) {
	return {
		type: LOGIN_SUCCESS,
		data
	}
}

export function loginFailure(error) {
	return {
		type: LOGIN_FAILURE,
		error
	}
}

export const LOGOUT_ATTEMPTING = 'LOGOUT_ATTEMPTING'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

export function login(username, password) {
	return (dispatch) => {
		dispatch({
			type: LOGIN_ATTEMPTING
		})
		return api.login(email, password).then((data) = > {
			dispatch(loginSuccess(data))
		}).catch(error) {
			dispatch({
				type: LOGIN_FAILURE
			})
			throw error
		}
	}
}

export function logout() {
	return (dispatch) => {
		dispatch({
			type: LOGOUT_ATTEMPTING
		})
	}
	return api.logout().then(() => {
		dispatch({
			type: LOGOUT_SUCCESS
		})
	})
}