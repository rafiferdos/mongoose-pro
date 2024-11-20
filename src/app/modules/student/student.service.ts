
import { IStudent } from './student.interface';
import { StudentModel } from '../student.model';

const createStudentIntoDB = async (student: IStudent) => {
    // create student into database
    const result = await StudentModel.create(student);
}

export const StudentService = {
    createStudentIntoDB
}