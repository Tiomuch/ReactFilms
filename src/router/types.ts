import { FC } from 'react'

export type TRoutesTree = {
  [page in TRouteNames]: TRoute<page>
}

export type TRoute<N> = {
  name: N
  path: string
  component: FC
}

export type TRouteNames = 'main' | 'login' | 'register'
