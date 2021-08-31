import React, { ReactComponentElement } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';
import { appRoutes } from './routes';

const App = ():ReactComponentElement<any> => {
  return (
    <Router>
      <Switch>
        {appRoutes}
        <Redirect to={'/courses'}/>
      </Switch>
    </Router>
  );
  // Temporary redirects to courses page, while there is no landing page and/or pages for error cases
}

export default App;
