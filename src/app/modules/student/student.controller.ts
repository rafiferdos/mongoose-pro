import { RequestHandler } from 'express'
import sendResponse from '../../utils/sendResponse'
import { StudentService } from './student.service'

const getAllStudentsFromDB: RequestHandler = async (req, res, next) => {
  try {
    const result = await StudentService.getAllStudentsFromDB()
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Students fetched successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const getSingleStudentFromDB: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params
    const result = await StudentService.getSingleStudentFromDB(id)

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student fetched successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const deleteStudent: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params
    await StudentService.deleteStudent(id)

    sendResponse(res, {
      statusCode: httpStatus.OK,
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
