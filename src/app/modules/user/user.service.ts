import config from '../../config'
import { TStudent } from '../student/student.interface'
import { Student } from '../student/student.model'
import { TUser } from './user.interface'
import { User } from './user.model'

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  const userData: Partial<TUser> = {}
  userData.password = password || (config.default_password as string)
  userData.role = 'student'
  // make id in yyyy-semester_code-4_digit_random_number format incrementally for each student
  

  const newUser = await User.create(userData)
  if (Object.keys(newUser).length) {
    studentData.id = newUser.id
    studentData.user = newUser._id
    const newStudent = await Student.create(studentData)
    return newStudent
  }
}

export const UserServices = {
  createStudentIntoDB,
}
