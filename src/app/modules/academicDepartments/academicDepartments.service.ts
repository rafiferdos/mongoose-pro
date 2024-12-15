import { TAcademicDepartment } from './academicDepartments.interface'
import { academicDepartmentModel } from './academicDepartments.model'

const createAcademicDepartmentIntoDB = async (payload: TAcademicDepartment) =>
  await academicDepartmentModel.create(payload)

const getAllAcademicDepartmentsFromDB = async () =>
  (await academicDepartmentModel.find()).length === 0
    ? Promise.reject(new Error('No department found'))
    : await academicDepartmentModel.find().populate('academicFaculty')

const getSingleAcademicDepartmentFromDB = async (id: string) =>
  await academicDepartmentModel.findById(id).populate('academicFaculty')

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
