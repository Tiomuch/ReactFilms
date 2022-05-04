import { TSetAuthorizationHeadersProp } from './types'

export const setAuthorizationHeadersProp: TSetAuthorizationHeadersProp =
  token => ({
    Authorization: `Bearer ${token}` || 'without-token',
  })
