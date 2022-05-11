import { useState, useEffect } from 'react'
import { TUsePaginationHook } from './types'

export const usePagination: TUsePaginationHook = ({
  initialCountPages,
  initialPage,
}) => {
  const [paginationArray, setPaginationArray] = useState<string[]>([])

  useEffect(() => {
    if (initialCountPages <= 7 && initialCountPages >= 1) {
      let paginationChangedArray = ['PREVIOUS']
      for (let i = 0; i < initialCountPages; i++) {
        paginationChangedArray.push((i + 1).toString())
      }
      paginationChangedArray.push('NEXT')
      setPaginationArray(paginationChangedArray)
    } else if (initialCountPages > 7 && initialPage <= 4) {
      let paginationChangedArray = ['PREVIOUS']
      for (let i = 0; i < 5; i++) {
        paginationChangedArray.push((i + 1).toString())
      }
      paginationChangedArray.push('...')
      paginationChangedArray.push(initialCountPages.toString())
      paginationChangedArray.push('NEXT')
      setPaginationArray(paginationChangedArray)
    } else if (
      initialCountPages > 7 &&
      initialPage >= 5 &&
      initialCountPages - initialPage <= 3
    ) {
      let paginationChangedArray = ['PREVIOUS']
      paginationChangedArray.push('1')
      paginationChangedArray.push('...')
      for (let i = initialCountPages - 4; i <= initialCountPages; i++) {
        paginationChangedArray.push(i.toString())
      }
      paginationChangedArray.push('NEXT')
      setPaginationArray(paginationChangedArray)
    } else if (
      initialCountPages >= 9 &&
      initialPage - 1 >= 4 &&
      initialCountPages - initialPage >= 4
    ) {
      let paginationChangedArray = ['PREVIOUS']
      paginationChangedArray.push('1')
      paginationChangedArray.push('...')
      paginationChangedArray.push((initialPage - 1).toString())
      paginationChangedArray.push(initialPage.toString())
      paginationChangedArray.push((initialPage + 1).toString())
      paginationChangedArray.push('...')
      paginationChangedArray.push(initialCountPages.toString())
      paginationChangedArray.push('NEXT')
      setPaginationArray(paginationChangedArray)
    }
  }, [initialCountPages, initialPage])

  return {
    paginationArray,
  }
}
