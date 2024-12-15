import { StatusCodes } from 'http-status-codes'
import { model, Schema } from 'mongoose'
import AppError from '../../errors/AppError'

const academicDepartmentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: 'academicFaculty',
    },
  },
  { timestamps: true },
)

academicDepartmentSchema.pre('save', async function (next) {
  const isDepartmentExist = await academicDepartmentModel.findOne({
    name: this.name,
  })
  if (isDepartmentExist) {
    throw new AppError(StatusCodes.CONFLICT, 'This department already exists')
  }
  next()
})

academicDepartmentSchema.pre('findOneAndUpdate', async function (next) {
  const query = this.getQuery()
  const isDepartmentExist = await academicDepartmentModel.findOne(query)
  if (!isDepartmentExist) {
    throw new AppError(StatusCodes.NOT_FOUND, 'This department does not exists')
  }
  next()
})

export const academicDepartmentModel = model(
  'academicDepartment',
  academicDepartmentSchema,
)
