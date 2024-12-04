import { z } from 'zod'

const userValidationRoleSchema = z.enum(['admin', 'user', 'guest'])
const userValidationStatusSchema = z.enum(['in-progress', 'blocked'])

const userValidationSchema = z.object({
  id: z.string(),
  password: z
    .string()
    .max(20, { message: 'Password should be less than 20 characters' })
    .min(8, { message: 'Password should be more than 8 characters' }),
  needsPasswordChange: z.boolean().optional().default(true),
  role: userValidationRoleSchema,
  isDeleted: z.boolean().default(false).optional(),
  status: userValidationStatusSchema,
})

export const userValidation = {
  userValidationSchema,
}
