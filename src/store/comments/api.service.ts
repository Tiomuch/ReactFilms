import { AxiosResponse } from 'axios'
import { setAuthorizationHeadersProp } from '../../helpers'
import { HttpService } from '../../services'
import { COMMENTS_URL } from './config'
import {
  GetCommentsByFilmActionResponse,
  GetCommentsByFilmActionPayload,
  PayloadAuth,
  CreateCommentActionPayload,
  CreateCommentActionResponse,
} from './types'

export class CommentsAPI extends HttpService {
  static getCommentsByFilm(
    request: GetCommentsByFilmActionPayload & PayloadAuth,
  ): Promise<AxiosResponse<GetCommentsByFilmActionResponse>> {
    return this.request<GetCommentsByFilmActionResponse>(
      'GET_COMMENTS_BY_FILM',
      {
        url: COMMENTS_URL.getCommentsByFilm(request.id),
        method: 'GET',
        headers: {
          ...setAuthorizationHeadersProp(request.authorization),
        },
      },
    )
  }

  static createComment(
    request: CreateCommentActionPayload & PayloadAuth,
  ): Promise<AxiosResponse<CreateCommentActionResponse>> {
    return this.request<CreateCommentActionResponse>('CREATE_COMMENT', {
      url: COMMENTS_URL.createComment,
      method: 'POST',
      data: {
        id: request.id,
      },
      headers: {
        'Content-Type': 'application/json',
        ...setAuthorizationHeadersProp(request.authorization),
      },
    })
  }
}
