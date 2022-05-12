import { createActionTypes, createApiActions } from 'actions-util'
import { createAction } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import { GetFilmsActionResponse, GetFilmsActionPayload } from './types'

export const getFilmsAction = createApiActions<
  GetFilmsActionPayload,
  GetFilmsActionResponse,
  AxiosError
>(createActionTypes('FILMS/GET_FILMS'))
