import express from 'express'
import { validateRequest } from '../../middlewares/validateRequest'
import { StudentController } from './student.controller'
import { UpdateStudentValidationSchema } from './student.validation'

const router = express.Router()

router.get('/', StudentController.getAllStudentsFromDB)
router.get('/:id', StudentController.getSingleStudentFromDB)
router.patch(
  '/:id',
  validateRequest(UpdateStudentValidationSchema),
  StudentController.updateStudent,
)
router.delete('/:id', StudentController.deleteStudent)

export const StudentRoutes = router
