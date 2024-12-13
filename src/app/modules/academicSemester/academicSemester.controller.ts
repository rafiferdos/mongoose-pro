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

const getAllAcademicSemester = catchAsync(async (req, res) => {
  const result = await academicSemesterServices.getAllAcademicSemesterFromDB()
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'All academic semester fetched successfully',
    success: true,
    data: result,
  })
})

const getSingleAcademicSemester = catchAsync(async (req, res) => {
  const result = await academicSemesterServices.getSingleAcademicSemesterFromDB(
    req.params.id,
  )
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Academic semester fetched successfully',
    success: true,
    data: result,
  })
})

const updateAcademicSemester = catchAsync(async (req, res) => {
  const result = await academicSemesterServices.updateAcademicSemesterIntoDB(
    req.params.id,
    req.body,
  )
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Academic semester updated successfully',
    success: true,
    data: result,
  })
})

export const academicSemesterControllers = {
  createAcademicSemester,
  getAllAcademicSemester,
  getSingleAcademicSemester,
  updateAcademicSemester,
}
