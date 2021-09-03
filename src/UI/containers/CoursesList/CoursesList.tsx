import { ReactComponentElement } from 'react';
import { observer } from 'mobx-react';
import { coursesStore } from 'stores';
import { FormatCourse } from 'types';
import { CourseCard } from 'UI';

type CoursesListProps = {
  currentCategory: string,
};

const CoursesList = observer(({currentCategory}: CoursesListProps):ReactComponentElement<'div'> => {
  return (
    <div>
      {
        coursesStore.formatCourses.map((course: FormatCourse) => {
          if (course.category.toLowerCase() === currentCategory || !currentCategory) {
            return (
              <CourseCard
                key={`course-card-${course.id}`}
                name={course.name}
                duration={course.duration}
                lessons={course.lessons}
                cover={course.cover}
              />
            )
          }
        })
      }
    </div>
  )
});

export { CoursesList };