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

const getAllAcademicDepartments = catchAsync(async (req, res) => {
  const result =
    await academicDepartmentServices.getAllAcademicDepartmentsFromDB()
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'All academic departments fetched successfully',
    success: true,
    data: result,
  })
})

const getSingleAcademicDepartment = catchAsync(async (req, res) => {
  const result =
    await academicDepartmentServices.getSingleAcademicDepartmentFromDB(
      req.params.id,
    )
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Academic department fetched successfully',
    success: true,
    data: result,
  })
})

const updateAcademicDepartment = catchAsync(async (req, res) => {
  const result = await academicDepartmentServices.updateAcademicDepartmentInDB(
    req.params.id,
    req.body,
  )
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Academic department updated successfully',
    success: true,
    data: result,
  })
})

export const academicDepartmentControllers = {
  createAcademicDepartment,
  getAllAcademicDepartments,
  getSingleAcademicDepartment,
  updateAcademicDepartment,
}
