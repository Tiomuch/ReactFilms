import React from 'react'
import { Divider } from '../../../components'
import {
  ButtonPagination,
  ChosenNumberPagination,
  NotChoosenNumberPagination,
  NotToChoosePagination,
  OffButtonPagination,
  StyledDeleteButton,
  StyledNumberLink,
  StyledTableNameLink,
} from '../styled'
import { TAdditionalServices } from '../types'

export const data = (
  oldData: TAdditionalServices[],
  handleDelete: (id: string) => () => void,
  handleModal: (status: boolean, data?: TAdditionalServices) => () => void,
) => {
  return oldData?.map(entity => {
    return {
      id: (
        <StyledNumberLink onClick={handleModal(false)}>
          {entity?.index ?? '-'}
        </StyledNumberLink>
      ),
      name: (
        <StyledTableNameLink onClick={handleModal(false, entity)}>
          {entity?.title ?? '-'}
        </StyledTableNameLink>
      ),
      adding: (
        <StyledNumberLink onClick={handleModal(false, entity)}>
          {entity?.value ?? '-'}
        </StyledNumberLink>
      ),
      type: (
        <StyledNumberLink onClick={handleModal(false, entity)}>
          {entity?.valueType === 1
            ? 'Sum'
            : entity?.valueType === 2
            ? '%'
            : '-'}
        </StyledNumberLink>
      ),
      delete: (
        <StyledDeleteButton onClick={handleDelete(entity?._id)}>
          Delete
        </StyledDeleteButton>
      ),
      key: entity?._id,
    }
  })
}

export const putPaginationElement = (
  el: string,
  choosePage: (el: number) => void,
  chosenPage: number,
  countPages: number,
  index: number,
) => {
  if (el === 'PREVIOUS') {
    if (chosenPage === 1) {
      return (
        <React.Fragment key={el}>
          <OffButtonPagination>{el}</OffButtonPagination>
          <Divider width={50} />
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment key={el}>
          <ButtonPagination onClick={() => choosePage(chosenPage - 1)}>
            {el}
          </ButtonPagination>
          <Divider width={50} />
        </React.Fragment>
      )
    }
  } else if (el === 'NEXT') {
    if (chosenPage === countPages) {
      return (
        <React.Fragment key={el}>
          <Divider width={30} />
          <OffButtonPagination>{el}</OffButtonPagination>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment key={el}>
          <Divider width={30} />
          <ButtonPagination onClick={() => choosePage(chosenPage + 1)}>
            {el}
          </ButtonPagination>
        </React.Fragment>
      )
    }
  } else if (el === '...') {
    return (
      <React.Fragment key={el + index}>
        <NotToChoosePagination>{el}</NotToChoosePagination>
        <Divider width={20} />
      </React.Fragment>
    )
  } else if (Number(el) === chosenPage) {
    return (
      <React.Fragment key={el}>
        <ChosenNumberPagination>{el}</ChosenNumberPagination>
        <Divider width={20} />
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment key={el}>
        <NotChoosenNumberPagination onClick={() => choosePage(Number(el))}>
          {el}
        </NotChoosenNumberPagination>
        <Divider width={20} />
      </React.Fragment>
    )
  }
}
