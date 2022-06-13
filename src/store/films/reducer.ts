import { createReducer } from '@reduxjs/toolkit'
import {
  clearFilmAction,
  createFilmAction,
  getFilmByIdAction,
  getFilmsAction,
  updateFilmAction,
} from './actions'
import { TInitialState } from './types'

const InitialState: TInitialState = {
  films: [],
  total: 1,
  film: null,
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
      total: payload.total === 0 ? 1 : payload.total,
      loading: false,
    }))
    builder.addCase(getFilmsAction.failure, (state, { payload }) => ({
      ...state,
      error: payload,
      loading: false,
    }))

    builder.addCase(getFilmByIdAction.request, state => ({
      ...state,
      loading: true,
    }))
    builder.addCase(getFilmByIdAction.success, (state, { payload }) => ({
      ...state,
      film: payload.data,
      loading: false,
    }))
    builder.addCase(getFilmByIdAction.failure, (state, { payload }) => ({
      ...state,
      error: payload,
      loading: false,
    }))

    builder.addCase(createFilmAction.request, state => ({
      ...state,
      loading: true,
    }))
    builder.addCase(createFilmAction.success, (state, { payload }) => ({
      ...state,
      film: payload.data,
      loading: false,
    }))
    builder.addCase(createFilmAction.failure, (state, { payload }) => ({
      ...state,
      error: payload,
      loading: false,
    }))

    builder.addCase(updateFilmAction.request, state => ({
      ...state,
      loading: true,
    }))
    builder.addCase(updateFilmAction.success, (state, { payload }) => ({
      ...state,
      film: payload.data,
      loading: false,
    }))
    builder.addCase(updateFilmAction.failure, (state, { payload }) => ({
      ...state,
      error: payload,
      loading: false,
    }))

    builder.addCase(clearFilmAction, state => ({
      ...state,
      film: null,
    }))
  },
)
