export type TUsePagination<T = any> = {
  input: {
    initialPage: number
    initialCountPages: number
  }
  output: {
    paginationArray: Array<string>
  }
}

export type TUsePaginationHook = <T = any>(
  input: TUsePagination<T>['input'],
) => TUsePagination<T>['output']
