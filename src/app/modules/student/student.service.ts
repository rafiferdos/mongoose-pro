import { Student } from './student.model'

const getAllStudentsFromDB = async () => await Student.find()

const getSingleStudentFromDB = async (id: string) =>
  await Student.aggregate([{ $match: { id: id } }])

const deleteStudent = async (id: string) =>
  await Student.updateOne({ id: id }, { isDeleted: true })

export const StudentService = {
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  deleteStudent,
}
