import React, { FC, useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Table from 'rc-table'
import { usePagination, useTypedSelector } from '../../../hooks'
import { data, putPaginationElement } from './helpers'
import { Divider } from '../../../components'
import { columns } from './consts'
import { getCashFeesAction, getCashFeesSelector } from '../../../store'
import {
  StyledTableHeader,
  TableContainer,
  PaginationDiv,
  TableWrapper,
  StyledTable,
  StyledRow,
  StyledTextField,
} from '../styled'
import { TypedCashFees } from '../types'
import _ from 'lodash'

export const MainTable: FC = () => {
  const { user } = useTypedSelector(state => state.user)
  const dispatch = useDispatch()

  const { cashFees, total } = useTypedSelector(getCashFeesSelector)

  const [chosenPage, setChosenPage] = useState<number>(1)
  const [countPages, setCountPages] = useState<number>(1)
  const [paginationLimit, setPaginationLimit] = useState<number>(10)
  const [typedCashFees, setTypedCashFees] = useState<TypedCashFees[]>([])

  const { paginationArray } = usePagination<any>({
    initialPage: chosenPage,
    initialCountPages: countPages,
  })

  const choosePage = (page: number) => {
    dispatch(getCashFeesAction.request({ page, limit: paginationLimit }))

    setChosenPage(page)
  }

  const onChangeLimit = useCallback(
    _.debounce(limit => {
      dispatch(getCashFeesAction.request({ page: chosenPage, limit }))
    }, 1000),
    [],
  )

  const changeLimit = (limit: number) => {
    if (limit > 0) {
      setPaginationLimit(limit)

      onChangeLimit(limit)
    }
  }

  useEffect(() => {
    dispatch(
      getCashFeesAction.request({
        page: chosenPage,
        limit: paginationLimit,
      }),
    )
  }, [])

  // eslint-disable-next-line
  useEffect(() => {
    setTypedCashFees(data(cashFees))
  }, [cashFees])

  // eslint-disable-next-line
  useEffect(() => {
    setCountPages(Math.ceil((total ?? 1) / paginationLimit))
  }, [cashFees, total])

  return (
    <TableContainer>
      <StyledTextField
        name="adding"
        type="number"
        value={(+paginationLimit).toString()}
        inputProps={{
          style: {
            paddingLeft: '5px',
          },
        }}
        label="Limit"
        onChange={e => changeLimit(+e.target.value)}
        variant="standard"
      />

      <Divider height={30} />

      <TableWrapper>
        <Table
          columns={columns}
          data={typedCashFees}
          components={{
            body: {
              row: StyledRow,
            },
            header: {
              cell: StyledTableHeader,
            },
            table: StyledTable,
          }}
        />
      </TableWrapper>

      <Divider height={30} />

      <PaginationDiv>
        {paginationArray &&
          paginationArray.map((el, i) => {
            return putPaginationElement(
              el,
              choosePage,
              chosenPage,
              countPages,
              i,
            )
          })}

        <Divider height={60} />
      </PaginationDiv>
    </TableContainer>
  )
}
