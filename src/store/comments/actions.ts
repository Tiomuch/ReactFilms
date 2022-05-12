import { createActionTypes, createApiActions } from 'actions-util'
import { createAction } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import {
  GetCommentsByFilmActionResponse,
  GetCommentsByFilmActionPayload,
  CreateCommentActionPayload,
  CreateCommentActionResponse,
} from './types'

export const getCommentsByFilmAction = createApiActions<
  GetCommentsByFilmActionPayload,
  GetCommentsByFilmActionResponse,
  AxiosError
>(createActionTypes('COMMENTS/GET_COMMENTS_BY_FILM'))

export const createCommentAction = createApiActions<
  CreateCommentActionPayload,
  CreateCommentActionResponse,
  AxiosError
>(createActionTypes('COMMENTS/CREATE_COMMENT'))
