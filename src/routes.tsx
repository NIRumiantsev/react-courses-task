import { FC } from 'react';
import { Route } from 'react-router-dom';
import { CoursesPage, ProfilePage, ShoppingListPage } from 'UI/pages';

type RouteItem = {
  path: string,
  component: FC<any>,
};

const routes: RouteItem[] = [
  {
    path: '/courses/:category?',
    component: CoursesPage,
  },
  {
    path: '/profile',
    component: ProfilePage,
  },
  {
    path: '/shopping',
    component: ShoppingListPage,
  }
];

const appRoutes = routes.map((route: RouteItem, index: number) => (
  <Route
    exact
    path={route.path}
    component={route.component}
    key={`page-route-${index}`}
  />
));

export { routes, appRoutes };