import { z } from 'zod'

const createAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Name must be a string',
    }),
    academicFaculty: z.string({
      invalid_type_error: 'Academic Faculty must be a string',
    }),
  }),
})

const updateAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Name should be a string to update',
    }).optional(),
    academicFaculty: z.string({
      invalid_type_error: 'Academic Faculty should be a string to update',
    }).optional(),
  }),
})

export const AcademicDepartmentValidations = {
  createAcademicDepartmentValidationSchema,
  updateAcademicDepartmentValidationSchema,
}
