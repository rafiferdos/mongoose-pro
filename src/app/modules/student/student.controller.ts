import { NextFunction, Request, Response } from 'express'
import sendResponse from '../../utils/sendResponse'
import { StudentService } from './student.service'

const getAllStudentsFromDB = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await StudentService.getAllStudentsFromDB()
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Students fetched successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const getSingleStudentFromDB = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params
    const result = await StudentService.getSingleStudentFromDB(id)

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Student fetched successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params
    await StudentService.deleteStudent(id)

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Student deleted successfully',
    })
  } catch (error) {
    next(error)
  }
}

export const StudentController = {
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  deleteStudent,
}
