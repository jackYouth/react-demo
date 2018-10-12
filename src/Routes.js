import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import MyLoadingComponent from './basicComponents/MyLoadingComponent';
import AppliedRoute from './basicComponents/AppliedRoute';
import UnauthenticatedRoute from './basicComponents/UnauthenticatedRoute';
// import AuthenticatedRoute from "./basicComponents/AuthenticatedRoute";

const AsyncApp = Loadable({
  loader() {
    return import('./containers/App');
  },
  loading: MyLoadingComponent
});

const AsyncPage1 = Loadable({
  loader() {
    return import('./containers/Page1');
  },
  loading: MyLoadingComponent
});

const AsyncNotFound = Loadable({
  loader() {
    return import('./basicComponents/NotFound');
  },
  loading: MyLoadingComponent
});

export default ({ childProps }) => (
  <Switch>
    <AppliedRoute path="/" exact component={AsyncApp} props={childProps} />
    <UnauthenticatedRoute
      path="/"
      exact
      component={AsyncPage1}
      props={childProps}
    />
    {/* Finally, catch all unmatched routes */}
    <Route component={AsyncNotFound} />
  </Switch>
);
