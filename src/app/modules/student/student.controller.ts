import { StatusCodes } from 'http-status-codes'
import { catchAsync } from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { StudentService } from './student.service'

//* ===================== StudentController =====================

// Get all students from the database
const getAllStudentsFromDB = catchAsync(async (req, res) => {
  const result = await StudentService.getAllStudentsFromDB()
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Students fetched successfully',
    data: result,
  })
})

// Get a single student from the database
const getSingleStudentFromDB = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await StudentService.getSingleStudentFromDB(id)
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Student fetched successfully',
    data: result,
  })
})

// Update student in database
const updateStudent = catchAsync(async (req, res) => {
  const { id } = req.params
  await StudentService.deleteStudent(id)
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Student updated successfully',
    data: null,
  })
})

// Delete a student from the database
const deleteStudent = catchAsync(async (req, res) => {
  const { id } = req.params
  await StudentService.deleteStudent(id)
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Student deleted successfully',
    data: null, // may occur error
  })
})

export const StudentController = {
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  deleteStudent,
  updateStudent,
}
