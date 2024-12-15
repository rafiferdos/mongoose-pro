import { z } from 'zod'

const createAcademicFacultyValidationSchema = z.object({
  name: z.string({
    invalid_type_error: 'Academic faculty name must be a string',
    required_error: 'Academic faculty name is required',
  }),
})

const updateAcademicFacultyValidationSchema = z.object({
  name: z.string({
      invalid_type_error: 'Academic faculty name must be a string',
      required_error: 'Academic faculty name is required to update',
  }),
})

export const academicFacultyValidation = {
  createAcademicFacultyValidationSchema,
  updateAcademicFacultyValidationSchema,
}
