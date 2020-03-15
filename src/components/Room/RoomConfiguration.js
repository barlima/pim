import React, { useRef } from 'react';
import { withRouter } from 'react-router-dom';
import get from 'lodash/get';

import { startRoom } from './helpers/room';

const RoomConfiguration = ({ match }) => {
  const roundsRef = useRef();
  const durationRef = useRef();

  const start = async () => {
    const room = get(match, "params.name");
    const rounds = get(roundsRef, "current.value");
    const duration = get(durationRef, "current.value");

    const res = await startRoom(room, rounds, duration);

    if (!res || res.error) {
      return;
    }

    window.location.reload();
  }

  return (
    <div>
      <label>Rounds</label>
      <select ref={roundsRef} name="rounds" defaultValue="25">
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
      </select>

      <label>Round duration (seconds)</label>
      <select ref={durationRef} name="duration" defaultValue="20">
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="60">60</option>
      </select>

      <button onClick={start}>
        Start
      </button>
    </div>
  )
}

export default withRouter(RoomConfiguration);