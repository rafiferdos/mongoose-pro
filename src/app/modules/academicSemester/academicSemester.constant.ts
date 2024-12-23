import {
  TAcademicSemesterNameCodeMapper,
  TMonth,
  TSemesterCode,
  TSemesterName,
} from './academicSemester.interface'

export const AcademicSemesterName: TSemesterName[] = [
  'Autumn',
  'Summer',
  'Fall',
]
export const AcademicSemesterCode: TSemesterCode[] = ['01', '02', '03']
export const Month: TMonth[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export const academicSemesterNameCodeMapper: TAcademicSemesterNameCodeMapper = {
  Autumn: '01',
  Summer: '02',
  Fall: '03',
}
