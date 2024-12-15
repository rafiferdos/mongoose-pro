import express from 'express'
import { validateRequest } from './../../middlewares/validateRequest'
import { academicFacultyController } from './academicFaculty.controller'
import { academicFacultyValidation } from './academicFaculty.validation'

const router = express.Router()

router.post(
  '/create-academic-faculty',
  validateRequest(
    academicFacultyValidation.createAcademicFacultyValidationSchema,
  ),
  academicFacultyController.createAcademicFaculty,
)

router.get(
  '/get-all-academic-faculties',
  academicFacultyController.getAllAcademicFaculties,
)

router.get(
  '/get-single-academic-faculty/:id',
  academicFacultyController.getSingleAcademicFaculty,
)

router.patch(
  '/update-academic-faculty/:id',
  validateRequest(
    academicFacultyValidation.updateAcademicFacultyValidationSchema,
  ),
  academicFacultyController.updateAcademicFaculty,
)

export const AcademicFacultyRoutes = router
