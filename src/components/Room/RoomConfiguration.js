import React from 'react';
import { withRouter } from 'react-router-dom';
import get from 'lodash/get';

const RoomConfiguration = ({ match }) => {
  const start = () => {
    const room = get(match, "params.name");

    // ToDo Set status to IN_PROGRESS
  }

  return (
    <div>
      <label>Rounds</label>
      <select name="rounds" defaultValue="25">
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
      </select>

      <label>Round duration (seconds)</label>
      <select name="rounds" defaultValue="20">
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