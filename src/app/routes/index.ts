import { Router } from 'express'
import { AcademicDepartmentRoutes } from '../modules/academicDepartments/academicDepartments.route'
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.route'
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route'
import { StudentRoutes } from '../modules/student/student.route'
import { UserRoutes } from '../modules/user/user.route'

const router = Router()

const moduleRoutes = [
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/academic-semester',
    route: AcademicSemesterRoutes,
  },
  {
    path: '/academic-faculty',
    route: AcademicFacultyRoutes,
  },
  {
    path: '/academic-department',
    route: AcademicDepartmentRoutes,
  },
]

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route)
})

export default router
