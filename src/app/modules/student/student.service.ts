import { Student } from './student.model'

const getAllStudentsFromDB = async () =>
  await Student.find().populate('academicDepartment').populate('academicSemester')

const getSingleStudentFromDB = async (id: string) =>
  await Student.findOne({id: id}).populate('academicDepartment', 'academicSemester')

const deleteStudent = async (id: string) =>
  await Student.updateOne({ id: id }, { isDeleted: true })

export const StudentService = {
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  deleteStudent,
}
