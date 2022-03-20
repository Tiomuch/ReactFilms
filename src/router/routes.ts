import { TRoutesTree } from './types'
import {
  NotFoundPage,
  MainPage,
} from '../pages'

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
  }
}