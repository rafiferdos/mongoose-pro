import { TAcademicDepartment } from "./academicDepartments.interface";
import { academicDepartment } from "./academicDepartments.model";

const createAcademicDepartmentIntoDB = async(payload: TAcademicDepartment) => await academicDepartment