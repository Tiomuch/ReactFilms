import TextField from '@mui/material/TextField'
import styled from 'styled-components'
import { FLEX, FONT } from '../../utils'
import { COLORS } from '../../assets'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 20px;
`

export const Title = styled.h1`
  ${FONT({
    size: '30px',
    weight: '400',
    color: COLORS.lightBlack,
    align: 'center',
  })}
`

export const StyledTextField = styled(TextField)`
  width: 230px;

  text-indent: 5px;

  ${FONT({ family: 'Roboto', size: '16px', weight: '400' })}
`

export const Image = styled.img`
  width: 200px;
  height: 200px;
`

export const Icon = styled.img`
  width: 20px;
  height: 20px;

  cursor: pointer;
`

export const StyledButton = styled.div`
  width: 240px;
  height: 47px;
  text-decoration: none;
  ${FLEX({})}
  ${FONT({
    family: 'Montserrat',
    size: '24px',
    color: COLORS.white,
    weight: '400',
  })}
  background: ${COLORS.green};
  border-radius: 40px;
  cursor: pointer;
`
