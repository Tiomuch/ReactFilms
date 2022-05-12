export type Film = {
  _id: string
  createdAt: string
  updatedAt: string
  image: string
  title: string
  description: string
}

export type GetFilmsActionPayload = {
  page: number
  limit: number
}

export type GetFilmsActionResponse = {
  data: Film[]
}

export type TInitialState = {
  films: Film[]
}

export type PayloadAuth = {
  authorization: string
}
