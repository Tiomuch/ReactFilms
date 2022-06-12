export type CashFees = {
  id: string
  film_id: number
  country: string
  year: number
  money: number
}

export type GetCashFeesActionPayload = {
  page: number
  limit: number
}

export type GetCashFeesActionResponse = any

export type TInitialState = {
  cashFees: CashFees[]
  total: number
}

export type PayloadAuth = {
  authorization: string
}
