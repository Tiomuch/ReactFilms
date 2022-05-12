import { all } from 'redux-saga/effects'
import { userWatcher } from './user'
import { filmsWatcher } from './films'
import { commentsWatcher } from './comments'

function* rootSaga() {
  yield all([userWatcher(), filmsWatcher(), commentsWatcher()])
}

export default rootSaga
