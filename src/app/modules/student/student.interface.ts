import { Schema, model, connect } from 'mongoose'

export type UserName = {
  firstName: string
  middleName?: string
  lastName: string
}
export type Guardian = {
  name: UserName
  email?: string
  contactNo: string
  occupation?: string
  relation: string
}

export type LocalGuardian = {
  name: UserName
  email?: string
  contactNo: string
  occupation?: string
  relation: string
  presentAddress: string
  permanentAddress: string
}

export type IStudent = {
  id: string
  name: UserName
  email: string
  age: number
  gender: 'Male' | 'Female'
  avatar?: string
  dateOfBirth?: string
  contactNo: string
  emergencyContactNo: string
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'
  presentAddress: string
  permanentAddress: string
  guardianDetails: Guardian
  localGuardianDetails: LocalGuardian
  profileImage?: string
  isActive: boolean
}
