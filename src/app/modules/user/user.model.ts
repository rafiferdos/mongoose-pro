import { model, Schema } from 'mongoose'
import { TUser, TUserRole, TUserStatus } from './user.interface'
import config from '../../config'
import bcrypt from 'bcrypt'

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

//hash password before save
userSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(
    this.password,
    Number(config.bcrypt_salt_rounds),
  )
  next()
})

// post save middleware / hook
userSchema.post('save', async function (doc, next) {
  doc.password = '********'
  next()
})
export const User = model<TUser>('User', userSchema)
