import { zodResolver } from '@hookform/resolvers/zod'
import React, { FC, useEffect } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { Assets } from '../../assets'
import { Divider } from '../../components'
import { FilmScheme } from '../../consts'
import { useTypedSelector } from '../../hooks'
import {
  clearFilmAction,
  createFilmAction,
  getFilmByIdAction,
  getFilmsSelector,
  updateFilmAction,
} from '../../store'
import {
  Container,
  StyledTextField,
  Title,
  Image,
  StyledButton,
  Icon,
} from './styled'
import { TForm } from './types'

const Film: FC = () => {
  const { film } = useTypedSelector(getFilmsSelector)
  const { id } = useParams<{ id: string }>()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    trigger,
    formState: { isValid, errors },
  } = useForm<TForm>({
    resolver: zodResolver(FilmScheme),
    defaultValues: {
      title: film?.title ?? '',
      description: film?.description ?? '',
      image: film?.image ?? '',
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

      id === 'new'
        ? dispatch(createFilmAction.request({ ...filledData }))
        : dispatch(updateFilmAction.request({ ...filledData, id: id ?? '' }))
    }
  }

  const handleGoBack = () => {
    navigate('/main')
  }

  useEffect(() => {
    id !== 'new' && dispatch(getFilmByIdAction.request({ id: id ?? '' }))

    return () => {
      dispatch(clearFilmAction())
    }
  }, [id])

  return (
    <Container>
      <Icon src={Assets.LEFT_ARROW_ICON} onClick={handleGoBack} />

      <Divider height={10} />

      <Title>{id === 'new' ? 'Create film' : 'Edit film'}</Title>

      <Divider height={30} />

      {id !== 'new' && <Image src={film?.image ?? ''} />}

      <Divider height={30} />

      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <StyledTextField
            error={!!errors?.title?.message}
            id="standard-basic"
            value={value}
            label="Title"
            onChange={v => onChangeText(v.target.value, onChange, 'title')}
            helperText={errors?.title?.message}
            variant="outlined"
          />
        )}
        name="title"
      />

      <Divider height={20} />

      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <StyledTextField
            error={!!errors?.description?.message}
            id="standard-basic"
            value={value}
            label="Description"
            multiline
            minRows={6}
            onChange={v =>
              onChangeText(v.target.value, onChange, 'description')
            }
            helperText={errors?.description?.message}
            variant="outlined"
          />
        )}
        name="description"
      />

      <Divider height={20} />

      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <StyledTextField
            error={!!errors?.image?.message}
            id="standard-basic"
            value={value}
            label="Link to image"
            onChange={v => onChangeText(v.target.value, onChange, 'image')}
            helperText={errors?.image?.message}
            variant="outlined"
          />
        )}
        name="image"
      />

      <Divider height={20} />

      <StyledButton onClick={handleSubmit(onSubmit)}>Save</StyledButton>
    </Container>
  )
}

export default Film
