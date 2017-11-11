const root = 'http://localhost:4000/api/' // change this in prod
const POST = 'POST'     // CREATE
const GET = 'GET'       // READ
const PUT = 'PUT'       // UPDATE
const DELETE = 'DELETE' // DELETE

function createEndpoint(path) {
  return root + path ;
}

async function request(path, options = { credentials: 'include' }) {
  let response = await fetch(path, options)
  let data = await response.json()
  return data
}

function createRequestOptions(requestType, data) {
  let headers = new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
  })

  return {
    method: requestType,
    credentials: 'include',
    headers: headers,
    body: JSON.stringify(data),
  }
}

const api = {

  // ---------- USERS -----------

  // Create a new user
  createUser(email, password, passwordConfirmation) {
    return request(createEndpoint('users'),
      createRequestOptions(POST, {
        user : {
          email,
          password,
          password_confirmation: passwordConfirmation
        }
      }))
  }

  // Get a user
  getUser(id) {
    return request(createEndpoint('users/' + id))
  }

  // update a user
  updateUser(id, email, password, passwordConfirmation) {
    return request(createEndpoint('users'),
      createRequestOptions(PUT, {
        id,
        user : {
          email,
          password,
          password_confirmation: passwordConfirmation
        }
      }))
  }

  // Delete a user
  deleteUser(id) {
    return request(createEndpoint('users/' + id),
      createRequestOptions(DELETE, {
        id
      }))
  }

  // ---------- SESSIONS -----------

  // login a user
  login(email, password) {
    return request(createEndpoint('login'),
      createRequestOptions(POST, {
        email,
        password
      }))
  }

  // logout a user
  logout() {
    return request(createEndpoint('logout'),
      createRequestOptions(DELETE, {}))
  }

  // ---------- CURRENCIES -----------

  // Get all exchanges rates to USD
  getExchangeRates() {
    return request(createEndpoint('exchanges'))
  }

  // Get the exchange rate from USD to case-sensitive currency code
  getExchangeRate(currencyCode) {
    return request(createEndpoint('exchanges/' + currencyCode))
  }

}

export default api;
