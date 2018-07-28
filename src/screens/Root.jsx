import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import AuthParent from './Auth/Parent';
import Login from './Auth/Login';
import AppParent from './App/Parent';
import Home from './App/Home';
import Register from './Auth/Register/Register';
import PrivateRoute from './routeRules/PrivateRoute';
import OnlyGuestRoute from './routeRules/OnlyGuestRoute';

const ScreensRoot = () => {
  return (
    <div>
      {mountRoutes()}
    </div>
  )
}

export default ScreensRoot;

const mountRoutes = () => (
  <BrowserRouter>
    <Switch>

      {/* /auth/... routes */}
      <Route path='/auth' render={({ match }) => (
        <OnlyGuestRoute>
          <AuthParent>
            <Switch>
              <Route path={`${match.url}/login`} component={Login} />
              <Route path={`${match.url}/register`} component={Register} />

              <Redirect from='*' to={`${match.url}/login`} />
            </Switch>
          </AuthParent>
        </OnlyGuestRoute>
      )} />


      {/* /app/... routes */}
      <Route path='/app' render={({ match }) => (
        <PrivateRoute>
          <AppParent>
            <Route path={`${match.url}/`} exact component={Home} />
          </AppParent>
        </PrivateRoute>
      )} />

    </Switch>
  </BrowserRouter>
);
