import express from 'express'
import { validateRequest } from '../../middlewares/validateRequest'
import { academicDepartmentControllers } from './academicDepartments.controller'
import { AcademicDepartmentValidations } from './academicDepartments.validation'

const router = express.Router()

router.post(
  '/create-academic-department',
  validateRequest(
    AcademicDepartmentValidations.createAcademicDepartmentValidationSchema,
  ),
  academicDepartmentControllers.createAcademicDepartment,
)

router.get('get-all-academic-departments', academicDepartmentControllers.getAllAcademicDepartments)

router.get(
  '/get-single-academic-department/:id',
  academicDepartmentControllers.getSingleAcademicDepartment,
)

