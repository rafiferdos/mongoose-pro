import express from 'express'
import { validateRequest } from '../../middlewares/validateRequest'
import { StudentValidationSchema } from '../student/student.validation'
import { UserControllers } from './user.controller'

const router = express.Router()

router.post(
  '/create-student',
  validateRequest(StudentValidationSchema),
  UserControllers.createStudent,
)

export const userRoutes = router
