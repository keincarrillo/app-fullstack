import { z } from 'zod'

export const registerSchema = z.object({
  userName: z.string({ required_error: 'Username is required' }).min(3, {
    message: 'Username must be at least 3 characters long'
  }),
  email: z
    .string({ required_error: 'Email is required' })
    .email({ message: 'Invalid email format' }),
  password: z.string({ required_error: 'Password is required' }).min(6, {
    message: 'Password must be at least 6 characters long'
  })
})

export const signinSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .email({ message: 'Invalid email format' }),
  password: z.string({ required_error: 'Password is required' })
})
