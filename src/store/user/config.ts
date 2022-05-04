import { api } from '../config'

export const USER_URL = {
  login: `${api.withAPI}/auth/sign-in-admin`,
  register: `${api.withAPI}/auth/sign-up-admin`,
  get_user: `${api.withAPI}/admin/profile`,
}
