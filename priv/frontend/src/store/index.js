import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from '../reducers'

export const history = createHistory()

const initialState = {}

const middleware = [
  thunk,
  routerMiddleware(history)
]

const composedEnhancers = applyMiddleware(...middleware)

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)

export default store