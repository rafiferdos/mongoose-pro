import { z } from 'zod'

// Zod schema for UserName
const UserNameValidationSchema = z.object({
  firstName: z
    .string()
    .trim()
    .max(30, 'First Name should not be more than 30 characters')
    .regex(/^[A-Za-z]+$/, 'First Name should only contain alphabets'),
  middleName: z
    .string()
    .trim()
    .max(30, 'Middle Name should not be more than 30 characters')
    .regex(/^[A-Za-z]+$/, 'Middle Name should only contain alphabets')
    .optional()
    .or(z.literal('')),
  lastName: z
    .string()
    .trim()
    .max(30, 'Last Name should not be more than 30 characters')
    .regex(/^[A-Za-z]+$/, 'Last Name should only contain alphabets'),
})

// Zod schema for Guardian
const GuardianValidationSchema = z.object({
  name: UserNameValidationSchema,
  email: z
    .string()
    .email('Guardian email is invalid')
    .optional()
    .or(z.literal('')),
  contactNo: z.string().nonempty('Contact No is required for Guardian'),
  occupation: z.string().optional().or(z.literal('')),
  relation: z.string().nonempty('Relation is required for Guardian'),
})

// Zod schema for LocalGuardian
const LocalGuardianValidationSchema = z.object({
  name: UserNameValidationSchema,
  email: z
    .string()
    .email('Local Guardian email is invalid')
    .optional()
    .or(z.literal('')),
  contactNo: z.string().nonempty('Contact No is required for Local Guardian'),
  occupation: z.string().optional().or(z.literal('')),
  relation: z.string().nonempty('Relation is required for Local Guardian'),
  presentAddress: z
    .string()
    .nonempty('Present Address is required for Local Guardian'),
  permanentAddress: z
    .string()
    .nonempty('Permanent Address is required for Local Guardian'),
})

// Zod schema for Student
const StudentValidationSchema = z.object({
  id: z.string().nonempty('ID is required'),
  name: UserNameValidationSchema,
  age: z
    .number()
    .int('Age must be an integer')
    .min(0, 'Age must be non-negative'),
  email: z
    .string()
    .email('Email is invalid')
    .nonempty('Email is required for Student'),
  password: z
    .string()
    .nonempty('Password is required for Student')
    .min(6, 'Password should be at least 6 characters')
    .max(20, 'Password should not be more than 20 characters'),
  gender: z.enum(['Male', 'Female'], {
    errorMap: () => ({
      message: 'Gender should be either Male or Female',
    }),
  }),
  dateOfBirth: z.string().optional(),
  contactNo: z.string().nonempty('Contact No is required for Student'),
  emergencyContactNo: z
    .string()
    .nonempty('Emergency Contact No is required for Student'),
  bloodGroup: z
    .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
    .optional(),
  presentAddress: z.string().nonempty('Present Address is required'),
  permanentAddress: z.string().nonempty('Permanent Address is required'),
  guardianDetails: GuardianValidationSchema,
  localGuardianDetails: LocalGuardianValidationSchema,
  profileImage: z.string().optional().or(z.literal('')),
  isDeleted: z.boolean().default(false),
})

// Exported Zod schema
export default StudentValidationSchema
