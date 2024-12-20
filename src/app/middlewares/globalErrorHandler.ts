/* eslint-disable @typescript-eslint/no-unused-vars */

import { ErrorRequestHandler } from 'express'

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  const statusCode = err?.statusCode || 500
  const message = err.message || 'Something went wrong'

  type TErrorSource = {
    path: string | number
    message: string
  }[]

  const errorSources: TErrorSource = [
    {
      path: '',
      message: '',
    },
  ]

  res.status(statusCode).json({
    success: false,
    message,
    // error: err,
    errorSources,
  })
}

export default globalErrorHandler
