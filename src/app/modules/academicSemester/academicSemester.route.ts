import express from 'express'
import { validateRequest } from '../../middlewares/validateRequest'
import { academicSemesterControllers } from './academicSemester.controller'
import { AcademicSemesterValidations } from './academicSemester.validation'

const router = express.Router()

router.post(
  '/create-acedemic-semester',
  validateRequest(
    AcademicSemesterValidations.createAcademicSemesterValidationSchema,
  ),
  academicSemesterControllers.createAcademicSemester,
)

export const AcademicSemesterRoutes = router
