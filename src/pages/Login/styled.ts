import TextField from '@mui/material/TextField'
import styled from 'styled-components'
import { FLEX, FONT } from '../../utils'
import { COLORS } from '../../assets'
import { Link } from 'react-router-dom'
import { IconButton, Input, InputAdornment } from '@material-ui/core'
//@ts-ignore
import PasswordField from 'material-ui-password-field'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import InputLabel from '@material-ui/core/InputLabel'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background: ${COLORS.lightGreen};

  ${FLEX({})}
`

export const LoginWrapper = styled.div`
  width: 400px;

  padding: 50px;

  border-radius: 3px;

  background: ${COLORS.lightGreen};
`

export const StyledTextField = styled(TextField)`
  width: 100%;
  font-size: 16px;
`

export const StyledButton = styled.div`
  width: 100%;
  height: 47px;
  ${FLEX({})}
  align-items: center;
  text-align: center;
  background: ${COLORS.green};
  border-radius: 40px;
  font-size: 24px;
  color: ${COLORS.white};
  cursor: pointer;
`

export const Title = styled.h1`
  ${FONT({
    size: '20px',
    weight: '700',
    align: 'center',
    color: COLORS.lightBlue,
  })}
`

export const TextLink = styled.p`
  /* text-decoration: none; */
  text-decoration-line: underline;

  cursor: pointer;

  ${FONT({
    size: '16px',
    weight: '400',
    align: 'center',
    color: COLORS.blue,
  })}
`

export const StyledText = styled.p`
  text-decoration: none;
  ${FLEX({})}
  ${FONT({
    size: '16px',
    weight: '400',
    color: COLORS.darkGray,
  })}
`

export const StyledLink = styled(Link)`
  /* text-decoration: none; */
  text-decoration-line: underline;

  ${FLEX({})}

  cursor: pointer;

  ${FONT({
    size: '16px',
    weight: '400',
    align: 'center',
    color: COLORS.blue,
  })}
`

export const StyledInputLabel = styled(InputLabel)``

export const StyledInput = styled(Input)`
  width: 100%;
  font-size: 16px;
`

export const StyledInputAdornment = styled(InputAdornment)``

export const StyledIconButton = styled(IconButton)``

export const StyledFormControl = styled(FormControl)`
  width: 100%;
`

export const StyledPasswordField = styled(PasswordField)``

export const StyledFormHelperText = styled(FormHelperText)``
