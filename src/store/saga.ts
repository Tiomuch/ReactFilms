import { all } from 'redux-saga/effects'
import { userWatcher } from './user'
import { filmsWatcher } from './films'
import { cashFeesWatcher } from './cashFees'

function* rootSaga() {
  yield all([userWatcher(), filmsWatcher(), cashFeesWatcher()])
}

export default rootSaga
