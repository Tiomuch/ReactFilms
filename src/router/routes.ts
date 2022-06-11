import {
  LoginPage,
  MainPage,
  RegisterPage,
  RestorePasswordPage,
} from '../pages'
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
  restorePassword: {
    name: 'restorePassword',
    path: '/restore-password',
    component: RestorePasswordPage,
  },
}
