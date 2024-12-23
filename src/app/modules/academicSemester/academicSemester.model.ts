import { StatusCodes } from 'http-status-codes'
import { model, Schema } from 'mongoose'
import AppError from '../../errors/AppError'
import {
  AcademicSemesterCode,
  AcademicSemesterName,
  Month,
} from './academicSemester.constant'
import { TAcademicSemester } from './academicSemester.interface'

export const AcademicSemesterSchema = new Schema<TAcademicSemester>(
  {
    name: {
      type: String,
      required: true,
      enum: AcademicSemesterName,
    },
    year: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      enum: AcademicSemesterCode,
      required: true,
    },
    startMonth: {
      type: String,
      required: true,
      enum: Month,
    },
    endMonth: {
      type: String,
      required: true,
      enum: Month,
    },
  },
  { timestamps: true },
)

AcademicSemesterSchema.pre('save', async function (next) {
  const isAcademicSemesterExists = await AcademicSemesterModel.findOne({
    name: this.name,
    year: this.year,
  })

  if (isAcademicSemesterExists) {
    next(
      new AppError(
        StatusCodes.CONFLICT,
        'This academic semester already exists',
      ),
    )
  } else {
    next()
  }
})

export const AcademicSemesterModel = model<TAcademicSemester>(
  'AcademicSemester',
  AcademicSemesterSchema,
)
