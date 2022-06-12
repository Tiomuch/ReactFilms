import { createActionTypes, createApiActions } from 'actions-util'
import { createAction } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import { GetCashFeesActionResponse, GetCashFeesActionPayload } from './types'

export const getCashFeesAction = createApiActions<
  GetCashFeesActionPayload,
  GetCashFeesActionResponse,
  AxiosError
>(createActionTypes('CASH_FEES/GET_CASH_FEES'))
