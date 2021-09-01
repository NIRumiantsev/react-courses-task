import { makeAutoObservable } from 'mobx';
import {
  CourseDuration,
  FormatCourse,
} from 'types';

class CoursesStore {
  categories: string[] = []
  names: string[] = []
  durations: CourseDuration[] = []
  formatCourses: FormatCourse[] = []

  constructor() {
    makeAutoObservable(this);
  }
}

const coursesStore = new CoursesStore();

export { CoursesStore, coursesStore };