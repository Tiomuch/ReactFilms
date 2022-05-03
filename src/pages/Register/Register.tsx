import React, { FC, useCallback, useMemo } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Divider } from '../../components'
// import { reEmail, rePassword } from '../../consts'
// import { forgotPasswordAction, loginAction, registerAction } from '../../store'
import {
  Container,
  LoginWrapper,
  StyledButton,
  StyledTextField,
  StyledLink,
  StyledText,
  StyledFormControl,
  StyledInputLabel,
  StyledPasswordField,
  StyledFormHelperText,
} from './styled'
// import { TForm } from './types'

export const Register: FC = () => {
  const dispatch = useDispatch()

  // const [form, setForm] = useState<TForm>({
  //   email: '',
  //   password: '',
  //   repeatPassword: '',
  // })
  // const [emailError, setEmailError] = useState({ errorText: '', value: false })
  // const [passwordError, setPasswordError] = useState({
  //   errorText: '',
  //   value: false,
  // })
  // const [repeatPasswordError, setRepeatPasswordError] = useState({
  //   errorText: '',
  //   value: false,
  // })

  // const onPressRegister = () => {
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

  //     if (!rePassword.test(String(form.repeatPassword).toLowerCase())) {
  //       setRepeatPasswordError({
  //         value: true,
  //         errorText: 'Enter valid password',
  //       })
  //     } else if (form.password !== form.repeatPassword) {
  //       setRepeatPasswordError({
  //         value: true,
  //         errorText: 'Password mismatch',
  //       })
  //     } else {
  //       setRepeatPasswordError({ value: false, errorText: '' })
  //     }

  //     !!reEmail.test(String(form.email).toLowerCase()) &&
  //       !!rePassword.test(String(form.password).toLowerCase()) &&
  //       !!rePassword.test(String(form.repeatPassword).toLowerCase()) &&
  //       form.password === form.repeatPassword &&
  //       dispatch(registerAction.request(form))
  //   } catch (error) {
  //     Log.ruddy('Event: onPressRegister')
  //   }
  // }

  return (
    <Container>
      <LoginWrapper>
        <StyledTextField
          // error={emailError.value}
          id="standard-basic"
          name="email"
          // value={form.email}
          inputProps={{
            style: {
              paddingLeft: '5px',
            },
          }}
          label="Email"
          // onChange={v => inputHandler(v)}
          // helperText={emailError.errorText}
          variant="standard"
        />

        <Divider height={20} />

        {/* <StyledFormControl error={passwordError.value}>
          <StyledInputLabel htmlFor="name-label1">Password</StyledInputLabel>
          <StyledPasswordField
            id="name-label1"
            name="password"
            value={form.password}
            onChange={(v: any) => inputHandler(v)}
          />
          <StyledFormHelperText>{passwordError.errorText}</StyledFormHelperText>
        </StyledFormControl> */}

        <Divider height={20} />

        {/* <StyledFormControl error={repeatPasswordError.value}>
          <StyledInputLabel htmlFor="name-label">
            Repeat password
          </StyledInputLabel>
          <StyledPasswordField
            id="name-label"
            name="repeatPassword"
            value={form.repeatPassword}
            onChange={(v: any) => inputHandler(v)}
          />
          <StyledFormHelperText>
            {repeatPasswordError.errorText}
          </StyledFormHelperText>
        </StyledFormControl> */}

        <Divider height={80} />

        {/* <StyledButton onClick={onPressRegister}>Sign Up</StyledButton> */}

        <Divider height={100} />

        <StyledText>Do you have an account?</StyledText>

        <Divider height={10} />

        <StyledLink
          to={{
            pathname: '/login',
          }}
        >
          Sign In
        </StyledLink>
      </LoginWrapper>
    </Container>
  )
}

export default Register