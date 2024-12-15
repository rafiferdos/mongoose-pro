import { TAcademicFaculty } from './academicFaculty.interface'
import { academicFacultyModel } from './academicFaculty.model'

const createAcademicFacultyIntoDB = async (payload: TAcademicFaculty) =>
  await academicFacultyModel.create(payload)

const getAllAcademicFacultiesFromDB = async () =>
  await academicFacultyModel.find()

const getSingleAcademicFacultyFromDB = async (id: string) =>
  await academicFacultyModel.findById(id)

const updateAcademicFacultyInDB = async (
  id: string,
  payload: Partial<TAcademicFaculty>,
) => await academicFacultyModel.findByIdAndUpdate(id, payload, { new: true })

const deleteAcademicFacultyFromDB = async (id: string) =>
  await academicFacultyModel.findByIdAndDelete(id)

export const academicFacultyService = {
  createAcademicFacultyIntoDB,
  getAllAcademicFacultiesFromDB,
  getSingleAcademicFacultyFromDB,
  updateAcademicFacultyInDB,
  deleteAcademicFacultyFromDB,
}
