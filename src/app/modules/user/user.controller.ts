import { Request, Response } from 'express'
import { UserServices } from './user.service'

const createStudent = async (req: Request, res: Response) => {
  UserServices.createStudentIntoDB(req.body.password, req.body.student)
    .then((result) =>
      res.status(201).json({
        success: true,
        message: 'Student created successfully',
        data: result,
      }),
    )
    .catch((e) =>
      res.status(500).json({
        success: false,
        message: e instanceof Error ? e.message : 'Internal server error',
      }),
    )
}

export const UserControllers = {
  createStudent,
}
