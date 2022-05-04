export type TUser = {
  createdAt: string
  email: string
  password: string
  updatedAt: string
  _id: string
}

export type TInitialState = {
  token: string | null
  loading: boolean
  user: TUser | null
  error: any
}

export type LoginUserActionPayload = {
  email: string
  password: string
}

export type LoginUserActionResponse = any

export type GetUserActionResponse = any
