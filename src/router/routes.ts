import { LoginPage, RegisterPage } from '../pages'
import { TRoutesTree } from './types'

export const RoutesTree: TRoutesTree = {
  main: {
    name: 'main',
    path: '/main',
    component: MainPage,
  },
  login: {
    name: 'login',
    path: '/login',
    component: LoginPage,
  },
  register: {
    name: 'register',
    path: '/register',
    component: RegisterPage,
  },
}
