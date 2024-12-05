import { NextFunction, Request, Response } from 'express'
import { StudentService } from './student.service'

const getAllStudentsFromDB = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await StudentService.getAllStudentsFromDB()
    res
      .status(200)
      .json({ message: 'Students fetched successfully', data: result })
  } catch (error) {
    next(error)
  }
}

const getSingleStudentFromDB = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params
    const result = await StudentService.getSingleStudentFromDB(id)

    res
      .status(200)
      .json({ message: 'Student fetched successfully', data: result })
  } catch (error) {
    next(error)
  }
}

const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params
    await StudentService.deleteStudent(id)

    res.status(200).json({
      message: 'Student deleted successfully',
      success: true,
    })
  } catch (error) {
    next(error)
  }
}

export const StudentController = {
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  deleteStudent,
}
