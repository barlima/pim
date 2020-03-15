import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import Room from '../components/Room';
import JoinRoom from '../components/Room/JoinRoom';
import RoomPlay from '../components/Room/RoomPlay';

const RoomRouter = ({ history }) => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/room/:name/play" component={RoomPlay} />
        <Route path="/room/:name/join" component={JoinRoom} />
        <Route path="/room/:name" component={Room} />
      </Switch>
    </Router>
  );
}

export default RoomRouter;
