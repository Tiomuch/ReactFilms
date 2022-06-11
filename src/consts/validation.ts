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
    secretNumber: z.number().min(1, 'Enter valid number'),
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
  secretNumber: z.number().min(1, 'Enter valid number'),
})
