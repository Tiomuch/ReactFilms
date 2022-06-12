export type TUser = {
  createdAt: string
  name: string
  password: string
  secretNumber: number
  updatedAt: string
  id: string
}

export type TInitialState = {
  token: string | null
  loading: boolean
  user: TUser | null
  error: any
}

export type LoginUserActionPayload = {
  name: string
  password: string
}

export type RegisterUserActionPayload = {
  name: string
  password: string
  secretNumber: number
}

export type LoginUserActionResponse = any

export type GetUserActionResponse = any
