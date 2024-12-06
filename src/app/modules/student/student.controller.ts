import { catchAsync } from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { StudentService } from './student.service'

//* ===================== StudentController =====================

// Get all students from the database
const getAllStudentsFromDB = catchAsync(async (req, res) => {
  const result = await StudentService.getAllStudentsFromDB()
  sendResponse(res, {
    statusCode: httpStatus.OK,
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
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student fetched successfully',
    data: result,
  })
})

// Delete a student from the database
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
