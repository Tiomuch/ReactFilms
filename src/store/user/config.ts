import { api } from '../config'

export const USER_URL = {
  login: `${api.withAPI}/auth/sign-in`,
  register: `${api.withAPI}/auth/sign-up`,
  get_user: `${api.withAPI}/profile`,
}
