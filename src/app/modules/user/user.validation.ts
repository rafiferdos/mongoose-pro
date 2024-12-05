import { z } from 'zod'

const userValidationStatusSchema = z.enum(['in-progress', 'blocked'])

const userValidationSchema = z.object({
  id: z.string(),
  password: z
    .string({
      invalid_type_error: 'Password should be a string',
    })
    .max(20, { message: 'Password should be less than 20 characters' })
    .min(8, { message: 'Password should be more than 8 characters' })
    .optional(),
  status: userValidationStatusSchema,
})

export const userValidation = {
  userValidationSchema,
}
