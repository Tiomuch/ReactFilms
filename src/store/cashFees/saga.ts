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
import { getCashFeesAction } from './actions'
import { CashFeesAPI } from './api.service'

function* verifyTokenWorker() {
  const { token }: ReturnType<typeof getUserSelector> = yield select(
    getUserSelector,
  )

  if (token) return token

  throw new Error('verifyTokenWorker')
}

function* getCashFeesWorker({
  payload,
}: ReturnType<typeof getCashFeesAction['request']>) {
  try {
    const token: string = yield call(verifyTokenWorker)

    const response: PromiseReturnType<
      ReturnType<typeof CashFeesAPI.getCashFees>
    > = yield call([CashFeesAPI, CashFeesAPI.getCashFees], {
      authorization: token ?? '',
      page: payload.page,
      limit: payload.limit,
    })

    yield put(getCashFeesAction.success(response.data))
  } catch (e) {
    console.log('Error: getCashFeesWorker', e)

    yield put(getCashFeesAction.failure(e as any))
  }
}

export function* cashFeesWatcher() {
  yield takeLatest(getCashFeesAction.request, getCashFeesWorker)
}
