import { combineReducers } from '@reduxjs/toolkit'
import { userReducer } from './user'
import { filmsReducer } from './films'
import { cashFeesReducer } from './cashFees'

export default combineReducers({
  user: userReducer,
  films: filmsReducer,
  cashFees: cashFeesReducer,
})
