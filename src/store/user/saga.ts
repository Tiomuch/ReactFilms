import { takeLatest, select, call, put, take } from '@redux-saga/core/effects'
import {
  getUserAction,
  initAppAction,
  loginAction,
  registerAction,
  restorePasswordAction,
} from './actions'

import { getUserSelector } from './selectors'
import { PromiseReturnType } from '../types'
import { UserAPI } from './api.service'
import { useTypedSelector } from '../../hooks'
import { AxiosError } from 'axios'

export function* verifyTokenWorker() {
  const { token }: ReturnType<typeof getUserSelector> = yield select(
    getUserSelector,
  )

  if (token) return token

  throw new Error('verifyTokenWorker')
}

function* getUserWorker() {
  try {
    const token: string = yield call(verifyTokenWorker)

    const response: PromiseReturnType<ReturnType<typeof UserAPI.getUser>> =
      yield call([UserAPI, UserAPI.getUser], { authorization: token })

    yield put(getUserAction.success(response.data))
  } catch (e: any) {
    console.log('Error: getUserWorker', e)

    yield put(getUserAction.failure(e))
  }
}

function* loginWorker({ payload }: ReturnType<typeof loginAction['request']>) {
  try {
    const response: PromiseReturnType<ReturnType<typeof UserAPI.login>> =
      yield call([UserAPI, UserAPI.login], { ...payload })

    if (response) {
      yield put(loginAction.success(response.data))
    }
  } catch (e: any) {
    console.log('Error: loginWorker', e)

    yield put(loginAction.failure(e))
  }
}

function* registerWorker({
  payload,
}: ReturnType<typeof registerAction['request']>) {
  try {
    const response: PromiseReturnType<ReturnType<typeof UserAPI.register>> =
      yield call([UserAPI, UserAPI.register], { ...payload })

    if (response) {
      yield put(registerAction.success(response.data))
    }
  } catch (e: any) {
    console.log('Error: registerWorker', e)

    yield put(registerAction.failure(e))
  }
}

function* restorePasswordWorker({
  payload,
}: ReturnType<typeof restorePasswordAction['request']>) {
  try {
    const response: PromiseReturnType<
      ReturnType<typeof UserAPI.restorePassword>
    > = yield call([UserAPI, UserAPI.restorePassword], { ...payload })

    if (response) {
      yield put(restorePasswordAction.success({}))

      alert('Password changed successfully')
    }
  } catch (e: any) {
    console.log('Error: restorePasswordWorker', e)

    alert('Password change error')

    yield put(restorePasswordAction.failure(e))
  }
}

function* initAppWorker() {
  try {
    const { token }: ReturnType<typeof getUserSelector> = yield select(
      getUserSelector,
    )

    if (!!token) {
      yield put(getUserAction.request())
    }

    yield put(initAppAction.success())
  } catch (e: any) {
    console.log('Error: initAppWorker', e)

    yield put(initAppAction.failure(e))
  }
}

export function* userWatcher() {
  yield takeLatest(loginAction.request, loginWorker)
  yield takeLatest(registerAction.request, registerWorker)
  yield takeLatest(restorePasswordAction.request, restorePasswordWorker)
  yield takeLatest(getUserAction.request, getUserWorker)
  yield takeLatest(initAppAction.request, initAppWorker)
}
