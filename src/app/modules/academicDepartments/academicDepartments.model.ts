import { model, Schema } from 'mongoose'

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

export const academicDepartmentModel = model(
  'academicDepartment',
  academicDepartmentSchema,
)