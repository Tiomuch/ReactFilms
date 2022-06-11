export const protocolWS: string = 'ws://'
export const protocolHTTP: string = 'http://'

export const host: string = 'localhost'

export const portAPI: string = '8000'
export const portWS: string = '8086'

export const api = {
  ws: `${protocolWS}${host}:${portWS}`,
  withAPI: `${protocolHTTP}${host}:${portAPI}/api`,
}
