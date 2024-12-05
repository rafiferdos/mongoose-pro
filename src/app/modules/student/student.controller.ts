import { Request, Response } from 'express'
import { StudentService } from './student.service'

const getAllStudentsFromDB = async (req: Request, res: Response) => {
  try {
    const result = await StudentService.getAllStudentsFromDB()
    res
      .status(200)
      .json({ message: 'Students fetched successfully', data: result })
  } catch (error) {
    res.status(500).json({
      message: 'Failed to fetch students',
      error: (error as Error).message,
    })
  }
}

const getSingleStudentFromDB = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const result = await StudentService.getSingleStudentFromDB(id)

    res
      .status(200)
      .json({ message: 'Student fetched successfully', data: result })
  } catch (error) {
    res.status(500).json({
      message: 'Failed to fetch student',
      error: (error as Error).message,
    })
  }
}

const deleteStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    await StudentService.deleteStudent(id)

    res.status(200).json({
      message: 'Student deleted successfully',
      success: true,
    })
  } catch (error) {
    res.status(500).json({
      message: 'Failed to delete student',
      error: (error as Error).message,
    })
  }
}

export const StudentController = {
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  deleteStudent,
}
