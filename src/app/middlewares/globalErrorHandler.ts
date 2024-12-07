/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express'
import app from '../../app'

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    const statusCode = 500
    const message = err.message || 'Something went wrong'
    console.log(err)
    res.status(statusCode).json({
      success: false,
      message,
      error: err,
    })
  })
}

export default globalErrorHandler
