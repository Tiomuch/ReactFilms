export type CashFees = {
  id: string
  createdAt: string
  updatedAt: string
  film_id: string
  country: string
  year: number
  money: number
}

export type GetCashFeesActionPayload = {
  page: number
  limit: number
}

export type GetCashFeesActionResponse = {
  data: CashFees[]
}

export type TInitialState = {
  cashFees: CashFees[]
}

export type PayloadAuth = {
  authorization: string
}
