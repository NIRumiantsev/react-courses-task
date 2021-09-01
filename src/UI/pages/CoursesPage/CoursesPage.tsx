import { ReactComponentElement } from 'react';
import { PageHeader } from 'UI';
import { NavigationItem } from 'types';

const navigationItems: NavigationItem[] = [
  {
    name: 'Popular',
    route: '/courses/popular',
  },
  {
    name: 'Favorite',
    route: '/courses/favorite',
  },
  {
    name: 'New',
    route: '/courses/new',
  },
];

const CoursesPage = ():ReactComponentElement<'div'> => {
  return (
    <div>
      <PageHeader
        title="Courses"
        withNavigation={true}
        navigationItems={navigationItems}
      />
    </div>
  )
};

export { CoursesPage };