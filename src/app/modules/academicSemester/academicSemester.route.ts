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

router.get(
  '/get-all-academic-semester',
  academicSemesterControllers.getAllAcademicSemester,
)

router.get(
  '/get-single-academic-semester/:id',
  academicSemesterControllers.getSingleAcademicSemester,
)

router.patch(
  '/update-academic-semester/:id',
  validateRequest(
    AcademicSemesterValidations.updateAcademicSemesterValidationSchema,
  ),
  academicSemesterControllers.updateAcademicSemester,
)

export const AcademicSemesterRoutes = router
