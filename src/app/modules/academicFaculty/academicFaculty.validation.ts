import { z } from 'zod';

const academicFacultyValidationSchema = z.object({
    name: z.string({
        invalid_type_error: 'Academic faculty name must be a string',
        required_error: 'Academic faculty name is required',
    })
})

export const academicFacultyValidation = {
    academicFacultyValidationSchema,
}