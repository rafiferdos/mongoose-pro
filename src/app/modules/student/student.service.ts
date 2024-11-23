import { Student } from '../student.model'
import { TStudent } from './student.interface'

const createStudentIntoDB = async (studentData: TStudent) =>
  (await new Student(studentData).isUserExists(studentData.id))
    ? Promise.reject(new Error('Student already exists'))
    : await new Student(studentData).save()

const getAllStudentsFromDB = async () => await Student.find()

const getSingleStudentFromDB = async (id: string) =>
  await Student.findOne({ id: id })

const deleteStudent = async (id: string) => await Student.updateOne({ id: id }, { isDeleted: true })

export const StudentService = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  deleteStudent
}
