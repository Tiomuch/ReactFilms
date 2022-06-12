import { api } from '../config'

export const CASH_FEES_URL = {
  getCashFees: (page: number, limit: number) =>
    `${api.withAPI}/cash-fees/?page=${page}&limit=${limit}`,
}
