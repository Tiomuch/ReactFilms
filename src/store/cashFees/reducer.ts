import { createReducer } from '@reduxjs/toolkit'
import { getCashFeesAction } from './actions'
import { TInitialState } from './types'

const InitialState: TInitialState = {
  cashFees: [],
  total: 1,
}

export const cashFeesReducer = createReducer<TInitialState>(
  InitialState,
  builder => {
    builder.addCase(getCashFeesAction.request, state => ({
      ...state,
      loading: true,
    }))
    builder.addCase(getCashFeesAction.success, (state, { payload }) => ({
      ...state,
      cashFees: payload.data,
      total: payload.total === 0 ? 1 : payload.total,
      loading: false,
    }))
    builder.addCase(getCashFeesAction.failure, (state, { payload }) => ({
      ...state,
      error: payload,
      loading: false,
    }))
  },
)
