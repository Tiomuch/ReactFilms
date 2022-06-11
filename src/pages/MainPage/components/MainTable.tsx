import React, { FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Table from 'rc-table'
// import { TypedAdditionalServices } from '../types'
import { usePagination, useTypedSelector } from '../../../hooks'
// import { data, putPaginationElement } from './helpers'
import { Divider } from '../../../components'
import { columns } from './consts'
// import { getAdditionalServicesAction } from '../../../store'
import {
  StyledTableHeader,
  TableContainer,
  PaginationDiv,
  TableWrapper,
  StyledTable,
  StyledRow,
} from '../styled'

export const MainTable: FC = () => {
  const { user } = useTypedSelector(state => state.user)
  const dispatch = useDispatch()

  // const { additionalOptions, additionalTotal } = useTypedSelector(
  //   state => state.cars,
  // )

  const [chosenPage, setChosenPage] = useState<number>(1)
  const [countPages, setCountPages] = useState<number>(1)
  const [paginationLimit, setPaginationLimit] = useState<number>(10)
  // const [typedAdditionalServices, setTypedAdditionalServices] = useState<
  //   TypedAdditionalServices[]
  // >([])

  const { paginationArray } = usePagination<any>({
    initialPage: chosenPage,
    initialCountPages: countPages,
  })

  const choosePage = (page: number) => {
    // dispatch(
    //   getAdditionalServicesAction.request({ page, limit: paginationLimit }),
    // )

    setChosenPage(page)
  }

  useEffect(() => {
    // dispatch(
    //   getAdditionalServicesAction.request({
    //     page: chosenPage,
    //     limit: paginationLimit,
    //   }),
    // )
  }, [])

  // eslint-disable-next-line
  // useEffect(() => {
  //   // setTypedAdditionalServices(data(additionalOptions))
  // }, [additionalOptions])

  // eslint-disable-next-line
  // useEffect(() => {
  //   setCountPages(Math.ceil((additionalTotal ?? 1) / paginationLimit))
  // }, [additionalOptions, additionalTotal])

  return (
    <TableContainer>
      <TableWrapper>
        {/* <Table
          columns={columns}
          data={typedAdditionalServices}
          components={{
            body: {
              row: StyledRow,
            },
            header: {
              cell: StyledTableHeader,
            },
            table: StyledTable,
          }}
        /> */}
      </TableWrapper>

      <Divider height={30} />

      <PaginationDiv>
        {/* {paginationArray &&
          paginationArray.map((el, i) => {
            return putPaginationElement(
              el,
              choosePage,
              chosenPage,
              countPages,
              i,
            )
          })} */}

        <Divider height={60} />
      </PaginationDiv>
    </TableContainer>
  )
}
