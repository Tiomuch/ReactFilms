import { createActionTypes, createApiActions } from 'actions-util'
import { createAction } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import {
  GetUserActionResponse,
  LoginUserActionPayload,
  LoginUserActionResponse,
  RegisterUserActionPayload,
} from './types'

export const loginAction = createApiActions<
  LoginUserActionPayload,
  LoginUserActionResponse,
  AxiosError
>(createActionTypes('USER/LOGIN_USER'))

export const restorePasswordAction = createApiActions<
  RegisterUserActionPayload,
  LoginUserActionResponse,
  AxiosError
>(createActionTypes('USER/RESTORE_PASSWORD'))

export const registerAction = createApiActions<
  RegisterUserActionPayload,
  LoginUserActionResponse,
  AxiosError
>(createActionTypes('USER/REGISTER_USER'))

export const getUserAction = createApiActions<
  void,
  GetUserActionResponse,
  AxiosError
>(createActionTypes('USER/GET_USER'))

export const logoutAction = createAction('USER/LOGOUT')

export const initAppAction = createApiActions<void, void, AxiosError>(
  createActionTypes('USER/INIT_APP'),
)

export const verifyToken = createAction<void, 'USER/VERIFY_TOKEN'>(
  'USER/VERIFY_TOKEN',
)
