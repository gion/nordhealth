import { z } from 'zod'

export const userSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').optional().or(z.literal('')),
  email: z.string().email('Please enter a valid email address'),
  password: z
    .string()
    .regex(/^(?=.*[A-Z]).*$/, {
      message: 'Password should contain at least one uppercase letter',
    })
    .regex(/^(?=.*\d.*)/, {
      message: 'Password should contain at least one number',
    })
    .min(8, 'Password must be at least 8 characters'),
  acceptMarketing: z.boolean(),
})

export type User = z.infer<typeof userSchema>
