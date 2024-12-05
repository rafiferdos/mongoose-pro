import express from 'express'
import { StudentController } from './student.controller'

const router = express.Router()

router.get('/', StudentController.getAllStudentsFromDB)
router.get('/:id', StudentController.getSingleStudentFromDB)
router.delete('/:id', StudentController.deleteStudent)

export const StudentRoutes = router
