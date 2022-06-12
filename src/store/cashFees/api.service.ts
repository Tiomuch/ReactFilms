import { AxiosResponse } from 'axios'
import { setAuthorizationHeadersProp } from '../../helpers'
import { HttpService } from '../../services'
import { CASH_FEES_URL } from './config'
import {
  GetCashFeesActionResponse,
  GetCashFeesActionPayload,
  PayloadAuth,
} from './types'

export class CashFeesAPI extends HttpService {
  static getCashFees(
    request: GetCashFeesActionPayload & PayloadAuth,
  ): Promise<AxiosResponse<GetCashFeesActionResponse>> {
    return this.request<GetCashFeesActionResponse>('GET_CASH_FEES', {
      url: CASH_FEES_URL.getCashFees(request.page, request.limit),
      method: 'GET',
      headers: {
        ...setAuthorizationHeadersProp(request.authorization),
      },
    })
  }
}
