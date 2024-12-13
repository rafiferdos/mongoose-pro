import { Model, Types } from 'mongoose'

export type TUserName = {
  firstName: string
  middleName?: string
  lastName: string
}
export type TGuardian = {
  name: TUserName
  email?: string
  contactNo: string
  occupation?: string
  relation: string
}

export type TLocalGuardian = {
  name: TUserName
  email?: string
  contactNo: string
  occupation?: string
  relation: string
  presentAddress: string
  permanentAddress: string
}

export type TStudent = {
  id: string
  user: Types.ObjectId
  name: TUserName
  email: string
  password: string
  age: number
  gender: 'Male' | 'Female'
  avatar?: string
  dateOfBirth?: Date
  contactNo: string
  emergencyContactNo: string
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'
  presentAddress: string
  permanentAddress: string
  guardianDetails: TGuardian
  localGuardianDetails: TLocalGuardian
  admissionSemester: Types.ObjectId
  profileImage?: string
  isDeleted: boolean
}

export interface StudentMethod {
  isUserExists(id: string): Promise<TStudent | null>
}

export type StudentModel = Model<TStudent, Record<string, never>, StudentMethod>
