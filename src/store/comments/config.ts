import { api } from '../config'

export const COMMENTS_URL = {
  getCommentsByFilm: (id: string) => `${api.withAPI}/comments/${id}`,
  createComment: `${api.withAPI}/comments`,
}
