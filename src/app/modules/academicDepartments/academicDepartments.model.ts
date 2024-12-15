import { model, Schema } from 'mongoose'

const academicDepartmentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true },
)

export const academicDepartment = model(
  'academicDepartment',
  academicDepartmentSchema,
)
