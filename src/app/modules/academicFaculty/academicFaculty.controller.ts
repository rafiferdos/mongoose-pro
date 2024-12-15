import { StatusCodes } from 'http-status-codes'
import { catchAsync } from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { academicFacultyService } from './academicFaculty.service'

// -------------- Controller methods --------------

// Create a new academic faculty
const createAcademicFaculty = catchAsync(async (req, res) => {
  const result = await academicFacultyService.createAcademicFacultyIntoDB(
    req.body,
  )
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: 'Academic faculty created successfully',
    success: true,
    data: result,
  })
})

// Get all academic faculties
const getAllAcademicFaculties = catchAsync(async (req, res) => {
  const result = await academicFacultyService.getAllAcademicFacultiesFromDB()
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'All academic faculties fetched successfully',
    success: true,
    data: result,
  })
})

// Get a single academic faculty
const getSingleAcademicFaculty = catchAsync(async (req, res) => {
  const result = await academicFacultyService.getSingleAcademicFacultyFromDB(
    req.params.id,
  )
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Academic faculty fetched successfully',
    success: true,
    data: result,
  })
})

// Update an academic faculty
const updateAcademicFaculty = catchAsync(async (req, res) => {
  const result = await academicFacultyService.updateAcademicFacultyInDB(
    req.params.id,
    req.body,
  )
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Academic faculty updated successfully',
    success: true,
    data: result,
  })
})

// Export all academic faculty controllers
export const academicFacultyController = {
  createAcademicFaculty,
  getAllAcademicFaculties,
  getSingleAcademicFaculty,
  updateAcademicFaculty,
}
