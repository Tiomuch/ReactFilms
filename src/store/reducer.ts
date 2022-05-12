import { combineReducers } from '@reduxjs/toolkit'
import { userReducer } from './user'
import { filmsReducer } from './films'
import { commentsReducer } from './comments'

export default combineReducers({
  user: userReducer,
  films: filmsReducer,
  comments: commentsReducer,
})
