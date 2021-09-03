import { BaseService, ServiceLocator } from 'services';
import { CoursesStore } from 'stores';
import {
  COURSES_CATEGORIES_URL,
  COURSES_NAMES_URL,
  COURSES_DURATIONS_URL,
} from './urls';
import {
  CoursesCategories,
  CoursesNames,
  CoursesDurations,
} from 'types';
import { formatCourses, FormatCoursesPayload } from 'utils';

export class CoursesService extends BaseService {
  private store: CoursesStore;

  constructor(rootService: ServiceLocator, coursesStore: CoursesStore) {
    super(rootService);
    this.store = coursesStore;
  }

  async loadCategories() {
    const categoriesResponse: CoursesCategories = await this.api.get(COURSES_CATEGORIES_URL);
    this.store.categories = categoriesResponse.categories;
  }

  async loadNames() {
    const namesResponse: CoursesNames = await this.api.get(COURSES_NAMES_URL);
    this.store.names = namesResponse.blocks;
  }

  async loadDurations() {
    const durationsResponse: CoursesDurations = await this.api.get(COURSES_DURATIONS_URL);
    this.store.durations = durationsResponse.minutes;
  }

  createFormatCourses() {
    const payload: FormatCoursesPayload = {
      categories: this.store.categories,
      names: this.store.names,
      durations: this.store.durations,
    };
    this.store.formatCourses = formatCourses(payload);
  }
}
