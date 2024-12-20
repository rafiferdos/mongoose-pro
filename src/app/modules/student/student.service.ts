import { StatusCodes } from 'http-status-codes'
import mongoose from 'mongoose'
import AppError from '../../errors/AppError'
import { User } from '../user/user.model'
import { TStudent } from './student.interface'
import { Student } from './student.model'

const getAllStudentsFromDB = async () =>
  await Student.find()
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    })
    .populate('academicSemester')

const getSingleStudentFromDB = async (id: string) =>
  await Student.findOne({ id })
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    })
    .populate('academicSemester')

const updateStudentIntoDB = async (id: string, payload: Partial<TStudent>) => {
  const { name, guardianDetails, localGuardianDetails, ...rest } = payload
  const modifiedUpdatedData: Record<string, unknown> = { ...rest }
  if (name && Object.keys(name).length > 0) {
    for (const [key, value] of Object.entries(name)) {
      modifiedUpdatedData[`name.${key}`] = value
    }
  }
  if (guardianDetails && Object.keys(guardianDetails).length > 0) {
    for (const [key, value] of Object.entries(guardianDetails)) {
      modifiedUpdatedData[`guardianDetails.${key}`] = value
    }
  }
  if (localGuardianDetails && Object.keys(localGuardianDetails).length > 0) {
    for (const [key, value] of Object.entries(localGuardianDetails)) {
      modifiedUpdatedData[`localGuardianDetails.${key}`] = value
    }
  }
  const updatedStudent = await Student.findOneAndUpdate({ id }, modifiedUpdatedData, { new: true, runValidators: true })
  if (!updatedStudent) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Failed to update student')
  }
  return updatedStudent
}

const deleteStudent = async (id: string) => {
  const session = await mongoose.startSession()
  try {
    session.startTransaction()
    const deletedStudent = await Student.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    )
    if (!deletedStudent) {
      throw new AppError(StatusCodes.NOT_FOUND, 'Failed to delete student')
    }
    const deletedUser = await User.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    )
    if (!deletedUser) {
      throw new AppError(StatusCodes.NOT_FOUND, 'Failed to delete student')
    }
    await session.commitTransaction()
    await session.endSession()
    return deletedStudent
  } catch (error) {
    await session.abortTransaction()
    session.endSession()
    throw new AppError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      'Failed to delete student',
      `${error}`,
    )
  }
}

export const StudentService = {
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  updateStudentIntoDB,
  deleteStudent,
}
