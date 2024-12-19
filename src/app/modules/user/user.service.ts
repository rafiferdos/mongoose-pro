import { StatusCodes } from 'http-status-codes'
import mongoose from 'mongoose'
import config from '../../config'
import AppError from '../../errors/AppError'
import { AcademicSemesterModel } from '../academicSemester/academicSemester.model'
import { TStudent } from '../student/student.interface'
import { Student } from '../student/student.model'
import { TUser } from './user.interface'
import { User } from './user.model'
import { generateStudentId } from './user.utils'

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  const userData: Partial<TUser> = {}
  userData.password = password || (config.default_password as string)
  userData.role = 'student'

  const academicSemester = await AcademicSemesterModel.findById(
    payload.academicSemester,
  )
  const session = await mongoose.startSession()
  try {
    session.startTransaction()
    if (academicSemester) {
      userData.id = await generateStudentId(academicSemester)
    } else {
      throw new AppError(StatusCodes.NOT_FOUND, 'Academic Semester not found')
    }

    const newUser = await User.create([userData], { session })
    if (!newUser.length) {
      throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR, 'User not created')
    }

    payload.id = newUser[0].id
    payload.user = newUser[0]._id
    const newStudent = await Student.create([payload], { session })
    if (!newStudent.length) {
      throw new AppError(
        StatusCodes.INTERNAL_SERVER_ERROR,
        'Student not created',
      )
    }
    await session.commitTransaction()
    session.endSession()
    return newStudent
  } catch (error) {
    await session.abortTransaction()
    session.endSession()
    throw new AppError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      'Failed to create student',
      `${error}`,
    )
  }
}

export const UserServices = {
  createStudentIntoDB,
}
