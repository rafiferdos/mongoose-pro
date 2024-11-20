import express, { Request, Response } from 'express'
import { StudentController } from './student.controller'

const router = express.Router()

router.post('/create-student', StudentController.createStudent)

export const StudentRoutes = router
