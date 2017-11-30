import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import currencyReducer from './currencyReducer'
import sesssionReducer from './sessionReducer'
import channelReducer from './channelReducer'
import userReducer from './userReducer'

export default combineReducers({
  routing: routerReducer,
  channel: channelReducer,
  currency: currencyReducer,
  session: sesssionReducer,
  user: userReducer
})