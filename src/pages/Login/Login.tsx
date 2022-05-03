import React, { FC, useCallback, useMemo } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Divider } from '../../components'
// import { reEmail, rePassword } from '../../consts'
// import { forgotPasswordAction, loginAction } from '../../store'
import {
  Container,
  LoginWrapper,
  StyledButton,
  StyledTextField,
  StyledLink,
  StyledText,
  StyledInputLabel,
  StyledFormControl,
  StyledPasswordField,
  StyledFormHelperText,
} from './styled'
import { TForm } from './types'

export const Login: FC = () => {
  const dispatch = useDispatch()

  // const [form, setForm] = useState<TForm>({ email: '', password: '' })
  // const [emailError, setEmailError] = useState({ errorText: '', value: false })
  // const [passwordError, setPasswordError] = useState({
  //   errorText: '',
  //   value: false,
  // })

  // const inputHandler = useCallback(
  //   e => {
  //     setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  //   },
  //   [form],
  // )

  // const onPressLogin = () => {
  //   try {
  //     if (!reEmail.test(String(form.email).toLowerCase())) {
  //       setEmailError({ value: true, errorText: 'Enter valid email' })
  //     } else {
  //       setEmailError({ value: false, errorText: '' })
  //     }

  //     if (!rePassword.test(String(form.password).toLowerCase())) {
  //       setPasswordError({ value: true, errorText: 'Enter valid password' })
  //     } else {
  //       setPasswordError({ value: false, errorText: '' })
  //     }

  //     !!reEmail.test(String(form.email).toLowerCase()) &&
  //       !!rePassword.test(String(form.password).toLowerCase()) &&
  //       dispatch(loginAction.request(form))
  //   } catch (error) {
  //     Log.ruddy('Event: onPressLogin')
  //   }
  // }

  return (
    <Container>
      <LoginWrapper>
        {/* <StyledTextField
          error={emailError.value}
          id="standard-basic"
          name="email"
          value={form.email}
          inputProps={{
            style: {
              paddingLeft: '5px',
            },
          }}
          label="Email"
          onChange={v => inputHandler(v)}
          helperText={emailError.errorText}
          variant="standard"
        /> */}

        <Divider height={20} />

        {/* <StyledFormControl error={passwordError.value}>
          <StyledInputLabel htmlFor="name-label">Password</StyledInputLabel>
          <StyledPasswordField
            id="name-label"
            name="password"
            value={form.password}
            onChange={(v: any) => inputHandler(v)}
          />
          <StyledFormHelperText>{passwordError.errorText}</StyledFormHelperText>
        </StyledFormControl> */}

        <Divider height={80} />

        {/* <StyledButton onClick={onPressLogin}>Sign In</StyledButton> */}

        <Divider height={30} />

        <StyledLink
          to={{
            pathname: '/restore-password',
          }}
        >
          Forgot password
        </StyledLink>

        <Divider height={100} />

        <StyledText>Don't have an account?</StyledText>

        <Divider height={10} />

        <StyledLink
          to={{
            pathname: '/register',
          }}
        >
          Sign Up
        </StyledLink>
      </LoginWrapper>
    </Container>
  )
}

export default Login
