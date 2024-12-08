import { StatusCodes } from 'http-status-codes'
import { catchAsync } from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { academicSemesterServices } from './academicSemester.service'

const createAcademicSemester = catchAsync(async (req, res) => {
  const result = await academicSemesterServices.createAcademicSemesterIntoDB(
    req.body,
  )
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: 'Academic semester created successfully',
    success: true,
    data: result,
  })
})

export const academicSemesterControllers = {
  createAcademicSemester,
}
