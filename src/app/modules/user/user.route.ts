import express, { NextFunction, Request, Response } from 'express'
import { AnyZodObject } from 'zod'
import { StudentValidationSchema } from '../student/student.validation'
import { UserControllers } from './user.controller'

const router = express.Router()

const validateRequest =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    await schema.parseAsync({ body: req.body })
    next()
  }

router.post(
  '/create-student',
  validateRequest(StudentValidationSchema),
  UserControllers.createStudent,
)

export const userRoutes = router
