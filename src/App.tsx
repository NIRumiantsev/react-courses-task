import React, { ReactComponentElement, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';
import { appRoutes } from './routes';
import { PagesMenu } from 'UI';
import { serviceLocator } from 'services';

import 'App.scss';

const App = ():ReactComponentElement<any> => {
  useEffect(() => {
    const loadCoursesData = async () => {
      await serviceLocator.coursesService.loadCategories();
      await serviceLocator.coursesService.loadNames();
      await serviceLocator.coursesService.loadDurations();
      serviceLocator.coursesService.createFormatCourses();
    };
    loadCoursesData();
  }, []);

  return (
    <Router>
      <div className="App">
        <div className="App_container">
          <PagesMenu/>
          <Switch>
            {appRoutes}
            <Redirect to={'/courses'}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
  // Temporary redirects to courses page while there is no landing page and/or pages for error cases
}

export default App;
