import { createReducer } from '@reduxjs/toolkit'
import { getFilmsAction } from './actions'
import { TInitialState } from './types'

const InitialState: TInitialState = {
  films: [],
}

export const filmsReducer = createReducer<TInitialState>(
  InitialState,
  builder => {
    builder.addCase(getFilmsAction.request, state => ({
      ...state,
      loading: true,
    }))
    builder.addCase(getFilmsAction.success, (state, { payload }) => ({
      ...state,
      films: payload.data,
      loading: false,
    }))
    builder.addCase(getFilmsAction.failure, (state, { payload }) => ({
      ...state,
      error: payload,
      loading: false,
    }))
  },
)
