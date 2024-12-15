/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express'

const globalErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = err?.statusCode || 500
  const message = err.message || 'Something went wrong'
  res.status(statusCode).json({
    success: false,
    message,
    error: err,
  })
}

export default globalErrorHandler
