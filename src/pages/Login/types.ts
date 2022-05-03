import { TUseValidation } from '../../hooks'

export type TForm = {
  email: string
  password: string
}

export type TLoginValidationSchemaKeys = 'email'

export type TLoginValidationSchema =
  TUseValidation<TLoginValidationSchemaKeys>['input']['schema']
