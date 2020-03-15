import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import get from 'lodash/get';

import { API_URL, getPlayer } from './helpers/room';

const RoomPlay = ({ match }) => {
  const [ player, setPlayer ] = useState({});

  const fetchPlayer = async () => {
    const room = get(match, "params.name");
    const playerId = getPlayer();

    const res = await fetch(`${API_URL}/rooms/${room}/players/${playerId}`);
    const player = await res.json();
    setPlayer(player);
  }

  useEffect(() => {
    fetchPlayer();
  }, [])

  return (
    <div>
      {player.name}
    </div>
  )
}

export default withRouter(RoomPlay);