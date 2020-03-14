import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import Room from '../components/Room';
import NewRoom from '../components/Room/NewRoom';
import JoinRoom from '../components/Room/JoinRoom';

const RoomRouter = ({ history }) => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/room/new" component={NewRoom} />
        <Route path="/room/:name/join" component={JoinRoom} />
        <Route path="/room/:name" component={Room} />
      </Switch>
    </Router>
  );
}

export default RoomRouter;
