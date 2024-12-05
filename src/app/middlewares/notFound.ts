import { Request, Response } from 'express'
import httpStatus from 'http-status';

const notFound = (req: Request, res: Response) => {
    res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: 'Route not found',
        error: 'Not Found',
  })
}

export default notFound