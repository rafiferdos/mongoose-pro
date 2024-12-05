import { NextFunction, Request, Response } from 'express'
import { UserServices } from './user.service'

const createStudent = async (req: Request, res: Response, next: NextFunction) => {
  UserServices.createStudentIntoDB(req.body.password, req.body.student)
    .then((result) =>
      res.status(201).json({
        success: true,
        message: 'Student created successfully',
        data: result,
      }),
    )
    .catch((error) =>
      next(error)
    )
}

export const UserControllers = {
  createStudent,
}
