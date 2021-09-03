interface CoursesData {
  count: number,
}

export interface CoursesNames extends CoursesData {
  blocks: string[],
}

export type CourseDuration = {
  id: number,
  time: number,
}

export interface CoursesDurations extends CoursesData {
  blocks: string[],
  minutes: CourseDuration[],
}

export interface CoursesCategories extends CoursesData {
  categories: string[],
}

export type FormatCourse = {
  id: number,
  name: string,
  category: string,
  duration: number,
  lessons: number,
  cover: string,
}