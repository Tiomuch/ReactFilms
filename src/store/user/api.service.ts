import { AxiosResponse } from 'axios'
import {
  GetUserActionResponse,
  LoginUserActionPayload,
  LoginUserActionResponse,
  RegisterUserActionPayload,
} from './types'

import { setAuthorizationHeadersProp } from '../../helpers'
import { PayloadAuth } from '../types'
import { HttpService } from '../../services'
import { USER_URL } from './config'

export class UserAPI extends HttpService {
  static login(
    request: LoginUserActionPayload,
  ): Promise<AxiosResponse<LoginUserActionResponse>> {
    return this.request<LoginUserActionResponse>('LOGIN', {
      url: USER_URL.login,
      method: 'POST',
      data: { ...request },
    })
  }

  static restorePassword(
    request: RegisterUserActionPayload,
  ): Promise<AxiosResponse<LoginUserActionResponse>> {
    return this.request<LoginUserActionResponse>('RESTORE_PASSWORD', {
      url: USER_URL.restorePassword,
      method: 'PUT',
      data: { ...request },
    })
  }

  static register(
    request: RegisterUserActionPayload,
  ): Promise<AxiosResponse<LoginUserActionResponse>> {
    return this.request<LoginUserActionResponse>('REGISTER', {
      url: USER_URL.register,
      method: 'POST',
      data: { ...request },
    })
  }

  static getUser(
    request: PayloadAuth,
  ): Promise<AxiosResponse<GetUserActionResponse>> {
    return this.request<GetUserActionResponse>('GET_USER', {
      url: USER_URL.get_user,
      method: 'GET',
      headers: {
        ...setAuthorizationHeadersProp(request.authorization),
      },
    })
  }
}
