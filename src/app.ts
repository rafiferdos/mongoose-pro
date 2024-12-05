/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import cors from 'cors'
import express, { Application, NextFunction, Request, Response } from 'express'
import { StudentRoutes } from './app/modules/student/student.route'
import { userRoutes } from './app/modules/user/user.route'

const app: Application = express()

app.use(express.json())
app.use(cors())

//application routes
app.use('/api/v1/students', StudentRoutes)
app.use('/api/v1/users', userRoutes)

app.get('/', function (req: Request, res: Response) {
  res.send('Hello World')
})

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = 500
  const message = err.message || 'Something went wrong'

  res.status(statusCode).json({
    success: false,
    message,
    error: err,
  })
})

app.listen(3000)
export default app
