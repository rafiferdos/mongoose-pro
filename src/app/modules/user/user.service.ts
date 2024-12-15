import config from '../../config'
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
  if (academicSemester) {
    userData.id = await generateStudentId(academicSemester)
  } else {
    throw new Error('Academic semester not found')
  }

  const newUser = await User.create(userData)
  if (Object.keys(newUser).length) {
    payload.id = newUser.id
    payload.user = newUser._id
    const newStudent = await Student.create(payload)
    return newStudent
  }
}

export const UserServices = {
  createStudentIntoDB,
}
