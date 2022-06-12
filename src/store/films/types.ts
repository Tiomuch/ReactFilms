export type Film = {
  id: string
  image: string
  title: string
  description: string
}

export type GetFilmsActionPayload = {
  page: number
  limit: number
}

export type GetFilmsActionResponse = any

export type TInitialState = {
  films: Film[]
  total: number
}

export type PayloadAuth = {
  authorization: string
}

export type CreateFilmActionPayload = {
  title: string
  description: string
  image: string
}

export type UpdateFilmActionPayload = {
  title: string
  description: string
  image: string
  id: string
}

export type DeleteFilmActionPayload = {
  id: string
  page?: number
  limit?: number
}
