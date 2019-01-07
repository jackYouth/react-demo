import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import MyLoadingComponent from './basicComponents/MyLoadingComponent';

const AsyncApp = Loadable({
  loader() {
    return import('./containers/App');
  },
  loading: MyLoadingComponent,
});

const AsyncPage1 = Loadable({
  loader() {
    return import('./containers/Page1');
  },
  loading: MyLoadingComponent,
});

const AsyncNotFound = Loadable({
  loader() {
    return import('./basicComponents/NotFound');
  },
  loading: MyLoadingComponent,
});

export default ({ childProps }) => (
  <Switch>
    <Route path="/" exact component={AsyncApp} props={childProps} />
    <Route path="/page1" exact component={AsyncPage1} props={childProps} />
    {/* Finally, catch all unmatched routes */}
    <Route component={AsyncNotFound} />
  </Switch>
);
