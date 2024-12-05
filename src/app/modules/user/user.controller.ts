import { Request, Response } from 'express'
import { UserServices } from './user.service'

const createStudent = async (req: Request, res: Response) => {
    try {
    const { password, student: studentData } = req.body
        const result = await UserServices.createStudentIntoDB(password, studentData)
        res.status(500).json({
            success: true,
            message: 'Student created successfully',
            data: result,
        })
    } catch (e: unknown) {
        const errorMessage = e instanceof Error ? e.message : 'Internal server error';
        res.status(500).json({
            success: false,
            message: errorMessage,
        })
  }
}

export const UserControllers = {
    createStudent,
}