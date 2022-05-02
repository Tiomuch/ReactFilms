import { TRoutesTree } from './types'
import { NotFoundPage, MainPage, LoginPage, RegisterPage } from '../pages'

export const RoutesTree: TRoutesTree = {
  main: {
    name: 'main',
    path: '/main',
    component: MainPage,
  },
  notFound: {
    name: 'notFound',
    path: '/not-found',
    component: NotFoundPage,
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
