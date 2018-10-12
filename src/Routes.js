import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AppliedRoute, UnauthenticatedRoute } from 'react-router';
import Loadable from 'react-loadable';
import MyLoadingComponent from './components/MyLoadingComponent';

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
    return import('./components/NotFound');
  },
  loading: MyLoadingComponent
});

export default ({ childProps }) => {
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
  </Switch>;
};
