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
import {
  createFilmAction,
  deleteFilmAction,
  getFilmsAction,
  updateFilmAction,
} from './actions'
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

function* createFilmWorker({
  payload,
}: ReturnType<typeof createFilmAction['request']>) {
  try {
    const token: string = yield call(verifyTokenWorker)

    const response: PromiseReturnType<ReturnType<typeof FilmsAPI.createFilm>> =
      yield call([FilmsAPI, FilmsAPI.createFilm], {
        authorization: token ?? '',
        ...payload,
      })

    yield put(createFilmAction.success(response.data))
  } catch (e) {
    console.log('Error: createFilmWorker', e)

    yield put(createFilmAction.failure(e as any))
  }
}

function* updateFilmWorker({
  payload,
}: ReturnType<typeof updateFilmAction['request']>) {
  try {
    const token: string = yield call(verifyTokenWorker)

    const response: PromiseReturnType<ReturnType<typeof FilmsAPI.updateFilm>> =
      yield call([FilmsAPI, FilmsAPI.updateFilm], {
        authorization: token ?? '',
        ...payload,
      })

    yield put(updateFilmAction.success(response.data))
  } catch (e) {
    console.log('Error: updateFilmWorker', e)

    yield put(updateFilmAction.failure(e as any))
  }
}

function* deleteFilmWorker({ payload }: ReturnType<typeof deleteFilmAction>) {
  try {
    const token: string = yield call(verifyTokenWorker)

    const response: PromiseReturnType<ReturnType<typeof FilmsAPI.deleteFilm>> =
      yield call([FilmsAPI, FilmsAPI.deleteFilm], {
        authorization: token ?? '',
        id: payload.id,
      })

    yield put(
      getFilmsAction.request({
        page: payload.page ?? 1,
        limit: payload.limit ?? 10,
      }),
    )
    yield take(getFilmsAction.success)
  } catch (e) {
    console.log('Error: deleteFilmWorker', e)
  }
}

export function* filmsWatcher() {
  yield takeLatest(getFilmsAction.request, getFilmsWorker)
  yield takeLatest(createFilmAction.request, createFilmWorker)
  yield takeLatest(updateFilmAction.request, updateFilmWorker)
  yield takeLatest(deleteFilmAction, deleteFilmWorker)
}
