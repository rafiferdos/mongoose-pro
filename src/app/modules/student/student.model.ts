import { Schema, model } from 'mongoose'
import validator from 'validator'

import {
  StudentMethod,
  StudentModel,
  TGuardian,
  TLocalGuardian,
  TStudent,
  TUserName,
} from './student.interface'

const UserNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    trim: true,
    required: [true, 'First Name is required'],
    maxlength: [30, 'First Name should not be more than 30 characters'],
    validate: {
      validator: (value) => validator.isAlpha(value),
      message: 'First Name should only contain alphabets',
    },
  },
  middleName: {
    type: String,
    trim: true,
    maxlength: [30, 'Middle Name should not be more than 30 characters'],
    validate: {
      validator: (value) => validator.isAlpha(value),
      message: 'Middle Name should only contain alphabets',
    },
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, 'Last Name is required'],
    maxlength: [30, 'Last Name should not be more than 30 characters'],
    validate: {
      validator: (value) => validator.isAlpha(value),
      message: 'Last Name should only contain alphabets',
    },
  },
})

const GuardianSchema = new Schema<TGuardian>({
  name: UserNameSchema,
  email: {
    type: String,
    trim: true,
    validate: {
      validator: (value: string) => validator.isEmail(value),
      message: 'Guardian email is invalid',
    },
  },
  contactNo: {
    type: String,
    required: [true, 'Contact No is required for Guardian'],
  },
  occupation: { type: String },
  relation: {
    type: String,
    required: [true, 'Relation is required for Guardian'],
  },
})

const LocalGuardianSchema = new Schema<TLocalGuardian>({
  name: UserNameSchema,
  email: {
    type: String,
    trim: true,
    validate: {
      validator: (value: string) => validator.isEmail(value),
      message: 'Local Guardian email is invalid',
    },
  },
  contactNo: {
    type: String,
    required: [true, 'Contact No is required for Local Guardian'],
  },
  occupation: { type: String },
  relation: {
    type: String,
    required: [true, 'Relation is required for Local Guardian'],
  },
  presentAddress: {
    trim: true,
    type: String,
    required: [true, 'Present Address is required for Local Guardian'],
  },
  permanentAddress: {
    trim: true,
    type: String,
    required: [true, 'Permanent Address is required for Local Guardian'],
  },
})

const studentSchema = new Schema<TStudent, StudentModel, StudentMethod>(
  {
    id: { type: String, required: true, unique: true },
    name: {
      type: UserNameSchema,
      trim: true,
      required: [true, 'First Name, Last Name are required for Student Name'],
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User ID is required'],
      unique: true,
    },
    age: { type: Number, required: [true, 'Age is required for Student'] },
    email: {
      trim: true,
      type: String,
      required: [true, 'Email is required for Student'],
      unique: true,
      validate: {
        validator: (value: string) => validator.isEmail(value),
        message: 'Email is invalid',
      },
    },
    gender: {
      type: String,
      enum: {
        values: ['Male', 'Female'],
        message: 'Gender should be either Male or Female not {VALUE}',
      },
      required: [true, 'Gender is required for Student'],
    },
    dateOfBirth: { type: Date },
    contactNo: {
      type: String,
      required: [true, 'Contact No is required for Student'],
    },
    emergencyContactNo: {
      type: String,
      required: [true, 'Emergency Contact No is required for Student'],
    },
    bloodGroup: {
      type: String,
      enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    },
    presentAddress: {
      trim: true,
      type: String,
      required: [true, 'Present Address is required'],
    },
    permanentAddress: {
      trim: true,
      type: String,
      required: [true, 'Permanent Address is required'],
    },
    guardianDetails: {
      trim: true,
      type: GuardianSchema,
      required: [true, 'Guardian details are required'],
    },
    localGuardianDetails: {
      trim: true,
      type: LocalGuardianSchema,
      required: [true, 'Local guardian details are required'],
    },
    academicSemester: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicSemester',
    },
    academicDepartment: {
      type: Schema.Types.ObjectId,
      ref: 'academicDepartment',
    },
    profileImage: { type: String, trim: true },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
)

//fullname virtual
studentSchema.virtual('fullName').get(function () {
  return `${this.name.firstName} ${this.name.middleName} ${this.name.lastName}`
})

// before find filter non deleted students
studentSchema.pre(['find', 'findOne'], function () {
  this.where({ isDeleted: false })
})

// before find filter non deleted students aggregation
studentSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: false } })
  next()
})

// custom instance method
studentSchema.methods.isUserExists = async function (id: string) {
  return await Student.findOne({ id: id })
}

//model
export const Student = model<TStudent, StudentModel>('Student', studentSchema)
