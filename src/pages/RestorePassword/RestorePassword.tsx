import React, { FC, useCallback, useMemo } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Divider } from '../../components'
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
import { TForm } from './types'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { RestorePasswordScheme } from '../../consts'
import { restorePasswordAction } from '../../store'

const RestorePassword: FC = () => {
  const dispatch = useDispatch()

  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    trigger,
    formState: { isValid, errors },
  } = useForm<TForm>({
    resolver: zodResolver(RestorePasswordScheme),
    defaultValues: {
      name: '',
      password: '',
      secret_number: undefined,
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

      dispatch(restorePasswordAction.request({ ...filledData }))
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

        <Divider height={20} />

        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <StyledTextField
              error={!!errors?.secret_number?.message}
              id="standard-basic"
              value={(+value).toString()}
              type="number"
              label="Secret number"
              onChange={v =>
                onChangeText(+v.target.value, onChange, 'secret_number')
              }
              helperText={errors?.secret_number?.message}
              variant="standard"
            />
          )}
          name="secret_number"
        />

        <Divider height={80} />

        <StyledButton onClick={handleSubmit(onSubmit)}>
          Restore password
        </StyledButton>

        <Divider height={100} />

        <StyledLink
          to={{
            pathname: '/login',
          }}
        >
          Sign in
        </StyledLink>
      </LoginWrapper>
    </Container>
  )
}

export default RestorePassword
