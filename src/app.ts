import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import { globalErrorHandler } from './app/middlewares/globalErrorHandler'
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

app.use(globalErrorHandler)

app.listen(3000)
export default app
