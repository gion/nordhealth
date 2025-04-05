import { z } from 'zod'

export const userSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').optional().or(z.literal('')),
  email: z
    .string()
    .min(1, 'An email address is required')
    .email('Please enter a valid email address'),
  password: z
    .string()
    .min(1, 'A password is required')
    .min(8, 'Password must be at least 8 characters'),
  acceptMarketing: z.boolean(),
})

export type User = z.infer<typeof userSchema>
