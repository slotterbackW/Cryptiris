import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from '../reducers'
import logger from 'redux-logger'

export const history = createHistory()

const initialState = {}

const middleware = [
  thunk,
  routerMiddleware(history),
  logger
]

const composedEnhancers = applyMiddleware(...middleware)

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)

export default store