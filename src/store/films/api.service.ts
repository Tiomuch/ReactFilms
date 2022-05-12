import { AxiosResponse } from 'axios'
import { setAuthorizationHeadersProp } from '../../helpers'
import { HttpService } from '../../services'
import { FILMS_URL } from './config'
import {
  GetFilmsActionResponse,
  PayloadAuth,
  GetFilmsActionPayload,
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
}
