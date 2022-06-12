import TextField from '@mui/material/TextField'
import styled from 'styled-components'
import { FLEX, FONT } from '../../utils'
import { COLORS } from '../../assets'

export const Container = styled.div`
  width: 100%;
  height: 100%;
`

export const StyledTableHeader = styled.th`
  padding: 5px 20px;

  height: 40px;

  border-collapse: collapse;

  background: ${COLORS.lightWhite};
  ${FONT({
    family: 'Montserrat',
    size: '12px',
    color: COLORS.darkGray,
    weight: '400',
    align: 'left',
  })};
`

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`

export const StyledNumberLink = styled.div`
  text-decoration: none;

  cursor: pointer;

  ${FONT({
    family: 'Montserrat',
    weight: '400',
    size: '14px',
    color: COLORS.tightBlack,
  })}
`

export const StyledTableNameLink = styled.div`
  text-decoration: none;

  cursor: pointer;

  ${FONT({
    family: 'Montserrat',
    weight: '600',
    size: '14px',
    color: COLORS.purple,
  })}
`

export const StyledDeleteButton = styled.div`
  ${FONT({
    family: 'Roboto',
    weight: '400',
    size: '14px',
    color: COLORS.lightRed,
  })}

  cursor: pointer;
`

export const StyledEditButton = styled.div`
  ${FONT({
    family: 'Roboto',
    weight: '400',
    size: '14px',
    color: COLORS.whiteGray,
  })}

  cursor: pointer;
`

export const OffButtonPagination = styled.div`
  ${FONT({
    family: 'Montserrat',
    weight: '400',
    size: '12px',
    color: COLORS.darkGray,
  })}
`

export const NotToChoosePagination = styled.div`
  ${FONT({
    family: 'Montserrat',
    weight: '400',
    size: '16px',
    color: COLORS.darkDeepBlack,
  })}
`

export const NotChoosenNumberPagination = styled(NotToChoosePagination)`
  cursor: pointer;
`

export const ChosenNumberPagination = styled.div`
  width: 48px;
  height: 48px;

  ${FONT({
    family: 'Montserrat',
    weight: '700',
    size: '16px',
    color: COLORS.darkYellow,
    align: 'center',
  })}

  ${FLEX({})}

  border: 1px solid ${COLORS.darkYellow};

  border-radius: 24px;
`

export const ButtonPagination = styled.div`
  ${FONT({
    family: 'Montserrat',
    weight: '400',
    size: '12px',
    color: COLORS.tightBlack,
  })}

  cursor: pointer;
`

export const TableContainer = styled.div`
  width: 100%;
`

export const StyledTextField = styled(TextField)`
  width: 230px;

  text-indent: 5px;

  ${FONT({ family: 'Roboto', size: '16px', weight: '400' })}
`

export const StyledBody = styled.div`
  ${FLEX({
    direction: 'row',
    wrap: 'wrap',
    justify: 'flex-start',
    align: 'flex-start',
  })}
`

export const TableWrapper = styled.div`
  width: 100%;
  padding-bottom: 10px;

  background: ${COLORS.white};

  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const PaginationDiv = styled.div`
  width: 100%;

  ${FLEX({})}
`

export const StyledRow = styled.tr`
  & td {
    padding: 20px;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  &:hover {
    background: ${COLORS.gray};
  }

  background: ${COLORS.white};

  ${FONT({
    family: 'Montserrat',
    size: '14px',
    color: COLORS.veryDarkBlack,
    weight: '400',
  })}
`
