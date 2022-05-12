import { createReducer } from '@reduxjs/toolkit'
import { createCommentAction, getCommentsByFilmAction } from './actions'
import { TInitialState } from './types'

const InitialState: TInitialState = {
  comments: [],
}

export const commentsReducer = createReducer<TInitialState>(
  InitialState,
  builder => {
    builder.addCase(getCommentsByFilmAction.request, state => ({
      ...state,
      loading: true,
    }))
    builder.addCase(getCommentsByFilmAction.success, (state, { payload }) => ({
      ...state,
      comments: payload.data,
      loading: false,
    }))
    builder.addCase(getCommentsByFilmAction.failure, (state, { payload }) => ({
      ...state,
      error: payload,
      loading: false,
    }))

    builder.addCase(createCommentAction.request, state => ({
      ...state,
      loading: true,
    }))
    builder.addCase(createCommentAction.success, (state, { payload }) => ({
      ...state,
      loading: false,
    }))
    builder.addCase(createCommentAction.failure, (state, { payload }) => ({
      ...state,
      error: payload,
      loading: false,
    }))
  },
)
