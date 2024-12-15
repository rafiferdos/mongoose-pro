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

academicDepartmentSchema.pre('save', async function (next) {
  const isDepartmentExist = await academicDepartmentModel.findOne({
    name: this.name,
  })
  if (isDepartmentExist) {
    throw new Error('This department already exists')
  } else {
    next()
  }
})

academicDepartmentSchema.pre('findOneAndUpdate', async function (next) {
  const query = this.getQuery()
  const isDepartmentExist = await academicDepartmentModel.findOne({ query })

  if (!isDepartmentExist) {
    throw new Error('This department does not exists')
  } else {
    next()
  }
})

export const academicDepartmentModel = model(
  'academicDepartment',
  academicDepartmentSchema,
)
