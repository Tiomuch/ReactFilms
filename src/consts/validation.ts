import { z } from 'zod'

export const RegisterScheme = z
  .object({
    email: z
      .string()
      .nonempty({ message: 'Введіть email' })
      .email({ message: 'Введіть коректний email' }),
    password: z
      .string()
      .min(6, 'Введіть коректний пароль')
      .nonempty({ message: 'Введіть пароль' }),
    repeatPassword: z
      .string()
      .min(6, 'Введіть коректний пароль')
      .nonempty({ message: 'Введіть пароль' }),
  })
  .refine(data => data.repeatPassword === data.password, {
    message: 'Паролі повинні збігатися',
    path: ['repeatPassword'],
  })

export const LoginScheme = z.object({
  email: z
    .string()
    .nonempty({ message: 'Введіть email' })
    .email({ message: 'Введіть коректний email' }),
  password: z
    .string()
    .min(6, 'Введіть коректний пароль')
    .nonempty({ message: 'Введіть пароль' }),
})
