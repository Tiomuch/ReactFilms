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
import { getFilmsAction } from './actions'
import { FilmsAPI } from './api.service'

function* verifyTokenWorker() {
  const { token }: ReturnType<typeof getUserSelector> = yield select(
    getUserSelector,
  )

  if (token) return token

  throw new Error('verifyTokenWorker')
}

function* getFilmsWorker({
  payload,
}: ReturnType<typeof getFilmsAction['request']>) {
  try {
    const token: string = yield call(verifyTokenWorker)

    const response: PromiseReturnType<ReturnType<typeof FilmsAPI.getFilms>> =
      yield call([FilmsAPI, FilmsAPI.getFilms], {
        authorization: token ?? '',
        page: payload.page,
        limit: payload.limit,
      })

    yield put(getFilmsAction.success(response.data))
  } catch (e) {
    console.log('Error: getFilmsWorker', e)

    yield put(getFilmsAction.failure(e as any))
  }
}

export function* filmsWatcher() {
  yield takeLatest(getFilmsAction.request, getFilmsWorker)
}
