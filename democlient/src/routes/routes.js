import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../pages/login';
import Dashboard from '../pages/dashboard';
import Page from '../pages/page';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login}></Route>
        <Route exact path='/dashboard' component={Dashboard}></Route>
        <Route exact path='/pages/:pagename' component={Page}></Route>
      </Switch>
    </Router>
  );
};

export default Routes;
