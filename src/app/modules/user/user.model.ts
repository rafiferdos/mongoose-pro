import { model, Schema } from 'mongoose'
import { TUser, TUserRole, TUserStatus } from './user.interface'

const userSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      required: true,
      enum: ['admin', 'student', 'faculty'] as TUserRole[],
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      required: true,
      enum: ['in-progress', 'blocked'] as TUserStatus[],
      default: 'in-progress',
    },
  },
  {
    timestamps: true,
  },
)

export const User = model<TUser>('User', userSchema)
