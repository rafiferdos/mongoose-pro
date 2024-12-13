import { TAcademicSemester } from '../academicSemester/academicSemester.interface'

export const generateStudentId = (payload: TAcademicSemester) =>
  `${payload.year}${payload.code}${(Number((0).toString().padStart(4, '0')) + 1).toString()}`
