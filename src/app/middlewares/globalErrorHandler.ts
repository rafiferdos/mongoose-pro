/* eslint-disable @typescript-eslint/no-unused-vars */

import { NextFunction, Request, Response } from 'express'

const globalErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const statusCode = err?.statusCode || 500
  const message = err.message || 'Something went wrong'
  res.status(statusCode).json({
    success: false,
    message,
    error: err,
  })
}

export default globalErrorHandler
