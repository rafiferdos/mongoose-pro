import {
  IStudent,
  UserName,
  Guardian,
  LocalGuardian,
} from './student/student.interface'
import { Schema, model, connect } from 'mongoose'

const UserNameSchema = new Schema<UserName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
})

const GuardianSchema = new Schema<Guardian>({
  name: UserNameSchema,
  email: { type: String },
  contactNo: { type: String, required: true },
  occupation: { type: String },
  relation: { type: String, required: true },
})

const LocalGuardianSchema = new Schema<LocalGuardian>({
  name: UserNameSchema,
  email: { type: String },
  contactNo: { type: String, required: true },
  occupation: { type: String },
  relation: { type: String, required: true },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
})

const studentSchema = new Schema<IStudent>({
  id: { type: String, required: true },
  name: UserNameSchema,
  age: { type: Number, required: true },
  email: { type: String, required: true },
  gender: ['Male', 'Female'],
  dateOfBirth: { type: String },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardianDetails: {
    name: {
      firstName: { type: String, required: true },
      middleName: { type: String },
      lastName: { type: String, required: true },
    },
    email: { type: String },
    contactNo: { type: String, required: true },
    occupation: { type: String },
    relation: { type: String, required: true },
  },
  localGuardianDetails: {
    name: {
      firstName: { type: String, required: true },
      middleName: { type: String },
      lastName: { type: String, required: true },
    },
    email: { type: String },
    contactNo: { type: String, required: true },
    occupation: { type: String },
    relation: { type: String, required: true },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
  },
  profileImage: { type: String },
  isActive: { type: Boolean, required: true },
})

//model
export const StudentModel = model<IStudent>('Student', studentSchema)
