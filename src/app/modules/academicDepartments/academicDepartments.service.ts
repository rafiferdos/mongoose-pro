import { TAcademicDepartment } from './academicDepartments.interface'
import { academicDepartmentModel } from './academicDepartments.model'

const createAcademicDepartmentIntoDB = async (payload: TAcademicDepartment) =>
  await academicDepartmentModel.create(payload)

const getAllAcademicDepartmentsFromDB = async () =>
  await academicDepartmentModel.find()

const getSingleAcademicDepartmentFromDB = async (id: string) =>
  await academicDepartmentModel.findById(id)

const updateAcademicDepartmentInDB = async (
  id: string,
  payload: Partial<TAcademicDepartment>,
) => await academicDepartmentModel.findByIdAndUpdate(id, payload, { new: true })

export const academicDepartmentServices = {
  createAcademicDepartmentIntoDB,
  getAllAcademicDepartmentsFromDB,
  getSingleAcademicDepartmentFromDB,
  updateAcademicDepartmentInDB,
}
