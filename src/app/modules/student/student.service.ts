import { StatusCodes } from 'http-status-codes'
import mongoose from 'mongoose'
import AppError from '../../errors/AppError'
import { User } from '../user/user.model'
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
    throw error
  }
}

export const StudentService = {
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  deleteStudent,
}
