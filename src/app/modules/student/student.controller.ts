import { Request, Response } from 'express'
import { z } from 'zod'
import { StudentService } from './student.service'
import studentValidationSchema from './student.validation'

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body
    const zodParsedData = studentValidationSchema.parse(studentData)
    const result = await StudentService.createStudentIntoDB(zodParsedData)

    res.status(200).json({
      message: 'Student created successfully',
      data: result,
      success: true,
    })
  } catch (error) {
    // Handle Zod validation errors specifically
    if (error instanceof z.ZodError) {
      res.status(400).json({
        success: false,
        message: 'Validation Error',
        errors: error,
      })
    }

    // Handle other errors
    res.status(500).json({
      success: false,
      message: (error as Error).message || 'Failed to create student',
      error: (error as Error).message,
    })
  }
}

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
  createStudent,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  deleteStudent
}
