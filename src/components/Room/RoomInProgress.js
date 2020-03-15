import React from 'react';

import Navigation from '../Navigation';
import Players from './Players';

const RoomInProgress = ({ players }) => {
  return (
    <div>
      <Navigation />
      <p>Let's play</p>
      <Players players={players} />
    </div>
  )
}

export default RoomInProgress;