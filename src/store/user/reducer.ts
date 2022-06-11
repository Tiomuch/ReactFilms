import { createReducer } from '@reduxjs/toolkit'
import { TInitialState } from './types'

import {
  getUserAction,
  logoutAction,
  loginAction,
  initAppAction,
  registerAction,
  restorePasswordAction,
} from './actions'

const InitialState: TInitialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
}

export const userReducer = createReducer<TInitialState>(
  InitialState,
  builder => {
    builder.addCase(loginAction.request, state => ({
      ...state,
      loading: true,
      error: null,
    }))
    builder.addCase(loginAction.success, (state, { payload }) => ({
      ...state,
      token: payload.token,
      user: payload.data,
      loading: false,
    }))
    builder.addCase(loginAction.failure, (state, { payload }) => ({
      ...state,
      token: null,
      user: null,
      error: payload,
      loading: false,
    }))

    builder.addCase(restorePasswordAction.request, state => ({
      ...state,
      loading: true,
      error: null,
    }))
    builder.addCase(restorePasswordAction.success, (state, { payload }) => ({
      ...state,
      loading: false,
    }))
    builder.addCase(restorePasswordAction.failure, (state, { payload }) => ({
      ...state,
      loading: false,
    }))

    builder.addCase(registerAction.request, state => ({
      ...state,
      loading: true,
      error: null,
    }))
    builder.addCase(registerAction.success, (state, { payload }) => ({
      ...state,
      token: payload.token,
      user: payload.data,
      loading: false,
    }))
    builder.addCase(registerAction.failure, (state, { payload }) => ({
      ...state,
      token: null,
      user: null,
      error: payload,
      loading: false,
    }))

    builder.addCase(getUserAction.request, state => ({
      ...state,
      loading: true,
    }))
    builder.addCase(getUserAction.success, (state, { payload }) => ({
      ...state,
      user: payload.data,
      loading: false,
    }))
    builder.addCase(getUserAction.failure, (state, { payload }) => ({
      ...state,
      token: null,
      user: null,
      loading: false,
    }))

    builder.addCase(logoutAction, state => ({
      ...state,
      token: null,
      user: null,
    }))

    builder.addCase(initAppAction.failure, (state, { payload }) => ({
      ...state,
      error: payload,
      loading: false,
    }))
  },
)
