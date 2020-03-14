import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import QRCode from 'qrcode.react';
import get from 'lodash/get';

import { API_URL } from './helpers/room';
import Navigation from '../Navigation';
import Players from './Players';
import RoomConfiguration from './RoomConfiguration';

const Room = ({ location, match }) => {
  const joinUrl = `${process.env.REACT_APP_URL}${location.pathname}/join`;
  const [ players, setPlayers ] = useState([]);

  const fetchPlayers = async () => {
    const room = get(match, "params.name");

    const res = await fetch(`${API_URL}/rooms/${room}/players`);
    const players = await res.json();
    setPlayers(players);
  }

  useEffect(() => {
    fetchPlayers();
  }, [])

  return (
    <div>
      <Navigation />

      <p>
        Copy the following URL or scan the QR code to join the room!
      </p>

      <input type="text" disabled value={joinUrl} />

      <QRCode value={joinUrl} />

      <Players players={players} />

      <RoomConfiguration />
    </div>
  )
}

export default withRouter(Room);