export type TUserRole = 'admin' | 'student' | 'faculty'
export type TUserStatus = 'in-progress' | 'blocked'

export type TUser = {
  id: string
  password: string
  needsPasswordChange: boolean
  role: TUserRole
  isDeleted: boolean
  status: TUserStatus
}

export type TNewUser = {
  id: string
  password: string
  role: TUserRole
}
