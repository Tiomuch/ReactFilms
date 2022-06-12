import {
  LoginPage,
  MainPage,
  RegisterPage,
  RestorePasswordPage,
  CashFeesPage,
} from '../pages'
import { TRoutesTree } from './types'

export const RoutesTree: TRoutesTree = {
  main: {
    name: 'main',
    path: '/main',
    component: MainPage,
  },
  cashFees: {
    name: 'cashFees',
    path: '/cash-fees',
    component: CashFeesPage,
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
