import { StatusCodes } from 'http-status-codes'
import { catchAsync } from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { academicDepartmentServices } from './academicDepartments.service'

const createAcademicDepartment = catchAsync(async (req, res) => {
  const result =
    await academicDepartmentServices.createAcademicDepartmentIntoDB(req.body)

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: 'Academic department created successfully',
    success: true,
    data: result,
  })
})
