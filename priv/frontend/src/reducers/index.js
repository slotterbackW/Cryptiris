import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import currencyReducer from './currencyReducer'
import sesssionReducer from './sessionReducer'
import userReducer from './userReducer'

export default combineReducers({
  routing: routerReducer,
  currency: currencyReducer,
  session: sesssionReducer,
  user: userReducer
})