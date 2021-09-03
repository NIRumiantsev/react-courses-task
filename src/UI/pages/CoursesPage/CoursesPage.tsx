import { ReactComponentElement, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react';
import { PageHeader, CoursesList } from 'UI';
import { NavigationItem } from 'types';
import { coursesStore } from 'stores';

import './CoursesPage.scss';

const CoursesPage = observer(():ReactComponentElement<'div'> => {
  const params: {[key: string]: string} = useParams();
  const { category } = params;

  let navigationItems: NavigationItem[] = [];

  useMemo(() => {
    navigationItems = coursesStore.categories.map((category: string) => ({
      name: category,
      route: `/courses/${category.toLowerCase()}`,
    }));
  }, [coursesStore.categories, category]);

  return (
    <div className="CoursesPage">
      <PageHeader
        title="Courses"
        withNavigation={true}
        navigationItems={navigationItems}
        selectedItemName={category}
      />
      <CoursesList currentCategory={category}/>
    </div>
  )
});

export { CoursesPage };