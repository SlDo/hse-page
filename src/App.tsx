import React from 'react';

import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { ReactRouterBreadcrumb } from './components/breadcrumb';
import ScrollToTop from './components/scrollToTop';
import { navigation } from './utils/navigation';

export const App = (): JSX.Element => (
  <Router>
    <ScrollToTop />
    <ReactRouterBreadcrumb />
    <Switch>
      {navigation.map(({ path, component: Component, props }) => <Route path={path} {...props}><Component /></Route>)}
    </Switch>
  </Router>
);
