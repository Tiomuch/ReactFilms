import { AxiosResponse } from 'axios'
import { setAuthorizationHeadersProp } from '../../helpers'
import { HttpService } from '../../services'
import { FILMS_URL } from './config'
import {
  GetFilmsActionResponse,
  PayloadAuth,
  GetFilmsActionPayload,
  CreateFilmActionPayload,
  UpdateFilmActionPayload,
  DeleteFilmActionPayload,
} from './types'

export class FilmsAPI extends HttpService {
  static getFilms(
    request: GetFilmsActionPayload & PayloadAuth,
  ): Promise<AxiosResponse<GetFilmsActionResponse>> {
    return this.request<GetFilmsActionResponse>('GET_FILMS', {
      url: FILMS_URL.getFilms(request.page, request.limit),
      method: 'GET',
      headers: {
        ...setAuthorizationHeadersProp(request.authorization),
      },
    })
  }

  static createFilm(
    request: CreateFilmActionPayload & PayloadAuth,
  ): Promise<AxiosResponse<GetFilmsActionResponse>> {
    return this.request<GetFilmsActionResponse>('CREATE_FILM', {
      url: FILMS_URL.createFilm,
      data: {
        title: request.title,
        description: request.description,
        image: request.image,
      },
      method: 'POST',
      headers: {
        ...setAuthorizationHeadersProp(request.authorization),
      },
    })
  }

  static updateFilm(
    request: UpdateFilmActionPayload & PayloadAuth,
  ): Promise<AxiosResponse<GetFilmsActionResponse>> {
    return this.request<GetFilmsActionResponse>('UPDATE_FILM', {
      url: FILMS_URL.updateFilm(request.id),
      data: {
        title: request.title,
        description: request.description,
        image: request.image,
      },
      method: 'PUT',
      headers: {
        ...setAuthorizationHeadersProp(request.authorization),
      },
    })
  }

  static deleteFilm(
    request: DeleteFilmActionPayload & PayloadAuth,
  ): Promise<AxiosResponse<GetFilmsActionResponse>> {
    return this.request<GetFilmsActionResponse>('DELETE_FILM', {
      url: FILMS_URL.updateFilm(request.id),
      method: 'DELETE',
      headers: {
        ...setAuthorizationHeadersProp(request.authorization),
      },
    })
  }
}
