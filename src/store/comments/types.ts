export type Comment = {
  _id: string
  createdAt: string
  updatedAt: string
  text: string
}

export type GetCommentsByFilmActionPayload = {
  id: string
}

export type GetCommentsByFilmActionResponse = {
  data: Comment[]
}

export type TInitialState = {
  comments: Comment[]
}

export type PayloadAuth = {
  authorization: string
}

export type CreateCommentActionPayload = {
  text: string
  id: string
}

export type CreateCommentActionResponse = {
  data: Comment
}
