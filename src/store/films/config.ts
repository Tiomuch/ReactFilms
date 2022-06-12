import { api } from '../config'

export const FILMS_URL = {
  getFilms: (page: number, limit: number) =>
    `${api.withAPI}/film/?page=${page}&limit=${limit}`,
  createFilm: `${api.withAPI}/film`,
  updateFilm: (id: string) => `${api.withAPI}/film/${id}`,
}
