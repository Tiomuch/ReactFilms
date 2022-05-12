import { api } from '../config'

export const FILMS_URL = {
  getFilms: (page: number, limit: number) =>
    `${api.withAPI}/films/?page=${page}&limit=${limit}`,
}
