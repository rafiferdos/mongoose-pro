import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import router from './app/routes'
import notFound from './app/middlewares/notFound'

const app: Application = express()

app.use(express.json())
app.use(cors())

//application routes
app.use('/api/v1', router)
app.get('/', function (req: Request, res: Response) {
  res.send('Hello World')
})

app.use(globalErrorHandler)
app.use(notFound)
// app.listen(9000)
export default app
