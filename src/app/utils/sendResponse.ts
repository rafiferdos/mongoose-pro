import { Response } from 'express'

type TResponse<TData> = {
    statusCode: number
    success: boolean
    message?: string
    data?: TData
}

const sendResponse = <TData>(
  res: Response,
  data: TResponse<TData>,
) => {
  res.status(data.statusCode).json({
    success: data.success,
    message: data.message,
    data: data.data,
  })
}

export default sendResponse
