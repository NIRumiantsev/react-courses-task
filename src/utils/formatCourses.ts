import {
  CourseDuration,
  FormatCourse,
} from 'types';
import {
  Cover1,
  Cover2,
  Cover3,
  Cover4,
} from 'assets';

export type FormatCoursesPayload = {
  categories: string[],
  names: string[],
  durations: CourseDuration[],
};

const possibleCovers = [Cover1, Cover2, Cover3, Cover4];

//Test task API is not actually designed well and there are no connections between courses, ids and categories, also
//there are no courses covers, so in our case this function mostly makes some random stuff just to create a tolerable 2
// data structure

const formatCourses = (props: FormatCoursesPayload):FormatCourse[] => {
  const {
    categories,
    names,
    durations,
  } = props;

  return durations.map((duration: CourseDuration):FormatCourse => ({
    id: duration.id,
    name: names[duration.id - 1],
    duration: duration.time,
    lessons: Math.floor(Math.random() * 100),
    category: categories[Math.floor(Math.random() * 3)],
    cover: possibleCovers[Math.floor(Math.random() * 4)],
  }))
};

export { formatCourses }