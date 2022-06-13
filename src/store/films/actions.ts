import { createActionTypes, createApiActions } from 'actions-util'
import { createAction } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import {
  GetFilmsActionResponse,
  GetFilmsActionPayload,
  CreateFilmActionPayload,
  DeleteFilmActionPayload,
  UpdateFilmActionPayload,
  GetFilmByIdActionPayload,
} from './types'

export const getFilmsAction = createApiActions<
  GetFilmsActionPayload,
  GetFilmsActionResponse,
  AxiosError
>(createActionTypes('FILMS/GET_FILMS'))

export const createFilmAction = createApiActions<
  CreateFilmActionPayload,
  GetFilmsActionResponse,
  AxiosError
>(createActionTypes('FILMS/CREATE_FILM'))

export const deleteFilmAction = createAction<
  DeleteFilmActionPayload,
  'FILMS/DELETE_FILM'
>('FILMS/DELETE_FILM')

export const updateFilmAction = createApiActions<
  UpdateFilmActionPayload,
  GetFilmsActionResponse,
  AxiosError
>(createActionTypes('FILMS/UPDATE_FILM'))

export const getFilmByIdAction = createApiActions<
  GetFilmByIdActionPayload,
  GetFilmsActionResponse,
  AxiosError
>(createActionTypes('FILMS/GET_FILM_BY_ID'))

export const clearFilmAction = createAction<void, 'FILMS/CLEAR_FILM'>(
  'FILMS/CLEAR_FILM',
)
