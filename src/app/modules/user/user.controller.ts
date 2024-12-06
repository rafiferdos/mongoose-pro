import { RequestHandler } from 'express'
import sendResponse from '../../utils/sendResponse'
import { UserServices } from './user.service'

const createStudent : RequestHandler = async (
  req,
  res,
  next,
) => {
  UserServices.createStudentIntoDB(req.body.password, req.body.student)
    .then((result) =>
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Student created successfully',
        data: result,
      }),
    )
    .catch((error) => next(error))
}

export const UserControllers = {
  createStudent,
}
