import { StatusCodes } from 'http-status-codes'
import { catchAsync } from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { UserServices } from './user.service'

// ===================== UserControllers =====================

// Create a student
const createStudent = catchAsync(async (req, res) => {
  const result = await UserServices.createStudentIntoDB(
    req.body.password,
    req.body.student,
  )
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Student created successfully',
    data: result,
  })
})
export const UserControllers = {
  createStudent,
}
