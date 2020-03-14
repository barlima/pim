import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import RoomRouter from './RoomRouter';
import Home from '../components/Home';

const history = createBrowserHistory();

const AppRouter = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/room" component={RoomRouter} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
