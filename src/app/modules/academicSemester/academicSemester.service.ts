import { TAcademicSemester } from "./academicSemester.interface";
import { AcademicSemesterModel } from "./academicSemester.model";

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => await AcademicSemesterModel.create(payload);

export const academicSemesterServices = {
    createAcademicSemesterIntoDB,
}