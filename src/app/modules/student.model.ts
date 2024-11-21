import {
  IStudent,
  UserName,
  Guardian,
  LocalGuardian,
} from './student/student.interface'
import { Schema, model, connect } from 'mongoose'

const UserNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true, 'First Name is required'],
    maxlength: [30, 'First Name should not be more than 30 characters'],
  },
  middleName: {
    type: String,
    maxlength: [30, 'Middle Name should not be more than 30 characters'],
  },
  lastName: {
    type: String,
    required: [true, 'Last Name is required'],
    maxlength: [30, 'Last Name should not be more than 30 characters'],
  },
})

const GuardianSchema = new Schema<Guardian>({
  name: UserNameSchema,
  email: { type: String },
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

const LocalGuardianSchema = new Schema<LocalGuardian>({
  name: UserNameSchema,
  email: { type: String },
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
    type: String,
    required: [true, 'Present Address is required for Local Guardian'],
  },
  permanentAddress: {
    type: String,
    required: [true, 'Permanent Address is required for Local Guardian'],
  },
})

const studentSchema = new Schema<IStudent>({
  id: { type: String, required: true, unique: true },
  name: {
    type: UserNameSchema,
    required: [true, 'First Name, Last Name are required for Student Name'],
  },
  age: { type: Number, required: [true, 'Age is required for Student'] },
  email: {
    type: String,
    required: [true, 'Email is required for Student'],
    unique: true,
  },
  gender: {
    type: String,
    enum: {
      values: ['Male', 'Female'],
      message: 'Gender should be either Male or Female not {VALUE}',
    },
    required: [true, 'Gender is required for Student'],
  },
  dateOfBirth: { type: String },
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
    type: String,
    required: [true, 'Present Address is required'],
  },
  permanentAddress: {
    type: String,
    required: [true, 'Permanent Address is required'],
  },
  guardianDetails: {
    type: GuardianSchema,
    required: [true, 'Guardian details are required'],
  },
  localGuardianDetails: {
    type: LocalGuardianSchema,
    required: [true, 'Local guardian details are required'],
  },
  profileImage: { type: String },
  isActive: {
    type: Boolean,
    required: [true, 'Status is required'],
    default: true,
  },
})

//model
export const StudentModel = model<IStudent>('Student', studentSchema)
