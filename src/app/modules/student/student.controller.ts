import { Request, Response } from 'express'
import { StudentService } from './student.service'

const createStudent = async (req: Request, res: Response) => {
  try {
    const {student: studentData} = req.body
    const result = await StudentService.createStudentIntoDB(studentData)

    res
      .status(200)
      .json({ message: 'Student created successfully', data: result })
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Failed to create student', error: (error as Error).message })
  }
}

const getAllStudentsFromDB = async (req: Request, res: Response) => {
  try {
    const result = await StudentService.getAllStudentsFromDB()

    res
      .status(200)
      .json({ message: 'Students fetched successfully', data: result })
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Failed to fetch students', error: (error as Error).message })
  }
}

export const StudentController = {
  createStudent,
  getAllStudentsFromDB
}
