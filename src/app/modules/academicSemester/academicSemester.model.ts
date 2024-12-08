import { model, Schema } from 'mongoose'
import {
  TAcademicSemester,
  TMonth,
  TSemesterCode,
} from './academicSemester.interface'

export const AcademicSemesterSchema = new Schema<TAcademicSemester>(
  {
    name: {
      type: String,
      required: true,
    },
    year: {
      type: Date,
      required: true,
    },
    code: {
      type: String,
      enum: [] as TSemesterCode[],
    },
    startMonth: {
      type: String,
      required: true,
      enum: [] as TMonth[],
    },
    endMonth: {
      type: String,
      required: true,
      enum: [] as TMonth[],
    },
  },
  { timestamps: true },
)

export const AcademicSemesterModel = model<TAcademicSemester>(
  'AcademicSemester',
  AcademicSemesterSchema,
)
