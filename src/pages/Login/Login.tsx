import { zodResolver } from '@hookform/resolvers/zod'
import React, { FC, useCallback, useMemo } from 'react'
import { useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Divider } from '../../components'
import { LoginScheme } from '../../consts'
import { loginAction } from '../../store'
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

const Login: FC = () => {
  const dispatch = useDispatch()

  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    trigger,
    formState: { isValid, errors },
  } = useForm<TForm>({
    resolver: zodResolver(LoginScheme),
    defaultValues: {
      name: '',
      password: '',
    },
  })

  const onChangeText = (
    text: any,
    onChange: (...event: any[]) => void,
    name: any,
  ) => {
    onChange(text)

    trigger(name)
  }

  const onSubmit: SubmitHandler<TForm> = filledData => {
    if (isValid) {
      console.log('filledData', filledData)

      dispatch(loginAction.request({ ...filledData }))
    }
  }

  return (
    <Container>
      <LoginWrapper>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <StyledTextField
              error={!!errors?.name?.message}
              id="standard-basic"
              value={value}
              label="Name"
              onChange={v => onChangeText(v.target.value, onChange, 'name')}
              helperText={errors?.name?.message}
              variant="standard"
            />
          )}
          name="name"
        />

        <Divider height={20} />

        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <StyledFormControl error={!!errors?.password?.message}>
              <StyledInputLabel htmlFor="name-label1">
                Password
              </StyledInputLabel>
              <StyledPasswordField
                id="name-label1"
                value={value}
                onChange={(v: any) =>
                  onChangeText(v.target.value, onChange, 'password')
                }
              />
              <StyledFormHelperText>
                {errors?.password?.message}
              </StyledFormHelperText>
            </StyledFormControl>
          )}
          name="password"
        />

        <Divider height={80} />

        <StyledButton onClick={handleSubmit(onSubmit)}>Sign in</StyledButton>

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
          Sign up
        </StyledLink>
      </LoginWrapper>
    </Container>
  )
}

export default Login
