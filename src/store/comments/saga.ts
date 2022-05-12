import {
  takeLatest,
  select,
  call,
  put,
  take,
  all,
} from '@redux-saga/core/effects'
import { PromiseReturnType } from '../types'
import { getUserSelector } from '../user'
import { createCommentAction, getCommentsByFilmAction } from './actions'
import { CommentsAPI } from './api.service'

function* verifyTokenWorker() {
  const { token }: ReturnType<typeof getUserSelector> = yield select(
    getUserSelector,
  )

  if (token) return token

  throw new Error('verifyTokenWorker')
}

function* getCommentsByFilmWorker({
  payload,
}: ReturnType<typeof getCommentsByFilmAction['request']>) {
  try {
    const token: string = yield call(verifyTokenWorker)

    const response: PromiseReturnType<
      ReturnType<typeof CommentsAPI.getCommentsByFilm>
    > = yield call([CommentsAPI, CommentsAPI.getCommentsByFilm], {
      authorization: token ?? '',
      id: payload.id,
    })

    yield put(getCommentsByFilmAction.success(response.data))
  } catch (e) {
    console.log('Error: getCommentsByFilmWorker', e)

    yield put(getCommentsByFilmAction.failure(e as any))
  }
}

function* createCommentWorker({
  payload,
}: ReturnType<typeof createCommentAction['request']>) {
  try {
    const token: string = yield call(verifyTokenWorker)

    const response: PromiseReturnType<
      ReturnType<typeof CommentsAPI.createComment>
    > = yield call([CommentsAPI, CommentsAPI.createComment] as any, {
      authorization: token ?? '',
      id: payload.id,
    })

    yield put(getCommentsByFilmAction.request({ id: payload.id }))
    yield take(getCommentsByFilmAction.success)

    yield put(createCommentAction.success(response.data))
  } catch (e) {
    console.log('Error: createCommentWorker', e)

    yield put(createCommentAction.failure(e as any))
  }
}

export function* commentsWatcher() {
  yield takeLatest(getCommentsByFilmAction.request, getCommentsByFilmWorker)
  yield takeLatest(createCommentAction.request, createCommentWorker)
}
