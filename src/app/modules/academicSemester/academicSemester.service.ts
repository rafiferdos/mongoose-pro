import { academicSemesterNameCodeMapper } from './academicSemester.constant'
import { TAcademicSemester } from './academicSemester.interface'
import { AcademicSemesterModel } from './academicSemester.model'

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error('Invalid Academic Semester Name')
  }
  return await AcademicSemesterModel.create(payload)
}

const getAllAcademicSemesterFromDB = async () => {
  return await AcademicSemesterModel.find()
}

const getSingleAcademicSemesterFromDB = async (id: string) => {
  return await AcademicSemesterModel.findById(id)
}

const updateAcademicSemesterIntoDB = async (
  id: string,
  payload: Partial<TAcademicSemester>,
) => {
  if (
    payload.name &&
    payload.code &&
    academicSemesterNameCodeMapper[payload.name] !== payload.code
  ) {
    throw new Error('Invalid Academic Semester Code')
  }
  return await AcademicSemesterModel.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  })
}

export const academicSemesterServices = {
  createAcademicSemesterIntoDB,
  getAllAcademicSemesterFromDB,
  getSingleAcademicSemesterFromDB,
  updateAcademicSemesterIntoDB,
}
