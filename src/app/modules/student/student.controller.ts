import { NextFunction, Request, RequestHandler, Response } from 'express'
import sendResponse from '../../utils/sendResponse'
import { StudentService } from './student.service'

const catchAsync =
  (fn: RequestHandler) => (req: Request, res: Response, next: NextFunction) =>
    Promise.resolve(fn(req, res, next)).catch(next)

const getAllStudentsFromDB = catchAsync(async (req, res) => {
  const result = await StudentService.getAllStudentsFromDB()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Students fetched successfully',
    data: result,
  })
})

const getSingleStudentFromDB = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await StudentService.getSingleStudentFromDB(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student fetched successfully',
    data: result,
  })
})

const deleteStudent = catchAsync(async (req, res) => {
  const { id } = req.params
  await StudentService.deleteStudent(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student deleted successfully',
  })
})

export const StudentController = {
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  deleteStudent,
}
