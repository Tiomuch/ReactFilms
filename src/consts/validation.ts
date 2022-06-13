import { z } from 'zod'

export const RegisterScheme = z
  .object({
    name: z
      .string()
      .min(1, 'Enter correct password')
      .nonempty({ message: 'Enter email' }),
    password: z
      .string()
      .min(6, 'Enter correct password')
      .nonempty({ message: 'Enter password' }),
    secret_number: z.number().min(1, 'Enter valid number'),
    repeatPassword: z
      .string()
      .min(6, 'Enter correct password')
      .nonempty({ message: 'Enter password' }),
  })
  .refine(data => data.repeatPassword === data.password, {
    message: 'Passwords should be equal',
    path: ['repeatPassword'],
  })

export const LoginScheme = z.object({
  name: z
    .string()
    .min(1, 'Enter correct name')
    .nonempty({ message: 'Enter email' }),
  password: z
    .string()
    .min(6, 'Enter correct password')
    .nonempty({ message: 'Enter password' }),
})

export const RestorePasswordScheme = z.object({
  name: z
    .string()
    .min(1, 'Enter correct name')
    .nonempty({ message: 'Enter email' }),
  password: z
    .string()
    .min(6, 'Enter correct password')
    .nonempty({ message: 'Enter password' }),
  secret_number: z.number().min(1, 'Enter valid number'),
})

export const FilmScheme = z.object({
  title: z
    .string()
    .min(1, 'Enter correct title')
    .nonempty({ message: 'Enter title' }),
  description: z
    .string()
    .min(1, 'Enter correct description')
    .nonempty({ message: 'Enter password' }),
  image: z
    .string()
    .min(1, 'Enter correct url')
    .nonempty({ message: 'Enter url to image' }),
})
