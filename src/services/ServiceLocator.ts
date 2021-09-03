import {
  coursesStore
} from 'stores';
import {
  CoursesService
} from 'services';

class ServiceLocator {
  public coursesService: CoursesService;

  constructor() {
    this.coursesService = new CoursesService(this, coursesStore);
  }
}

const serviceLocator = new ServiceLocator();

export { ServiceLocator, serviceLocator };
