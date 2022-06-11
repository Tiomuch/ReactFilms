import { api } from '../config'

export const USER_URL = {
  login: `${api.withAPI}/user/auth`,
  register: `${api.withAPI}/user/register`,
  get_user: `${api.withAPI}/user/profile`,
  restorePassword: `${api.withAPI}/user/restore-password`,
}
