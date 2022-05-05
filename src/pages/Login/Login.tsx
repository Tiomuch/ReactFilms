import { zodResolver } from '@hookform/resolvers/zod'
import React, { FC, useCallback, useMemo } from 'react'
import { useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Divider } from '../../components'
import { LoginScheme } from '../../consts'
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
      email: '',
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

      // dispatch(sendSupportMessageAction.request({ data: filledData }))
    }
  }

  return (
    <Container>
      <LoginWrapper>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <StyledTextField
              error={!!errors?.email?.message}
              id="standard-basic"
              value={value}
              label="Email"
              onChange={v => onChangeText(v.target.value, onChange, 'email')}
              helperText={errors?.email?.message}
              variant="standard"
            />
          )}
          name="email"
        />

        <Divider height={20} />

        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <StyledFormControl error={!!errors?.password?.message}>
              <StyledInputLabel htmlFor="name-label1">Пароль</StyledInputLabel>
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

        <StyledButton onClick={handleSubmit(onSubmit)}>Увійти</StyledButton>

        <Divider height={100} />

        <StyledText>Ще не маєте аккаунт?</StyledText>

        <Divider height={10} />

        <StyledLink
          to={{
            pathname: '/register',
          }}
        >
          Зареєструватися
        </StyledLink>
      </LoginWrapper>
    </Container>
  )
}

export default Login
