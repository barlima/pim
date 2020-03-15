import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import get from 'lodash/get';
import io from 'socket.io-client';

import { API_URL } from './helpers/room';
import RoomOpen from './RoomOpen';
import RoomInProgress from './RoomInProgress';

const Room = ({ location, match }) => {
  const joinUrl = `${process.env.REACT_APP_URL}${location.pathname}/join`;
  const [ room, setRoom ] = useState({});
  const [ roomAdmin, setRoomAdmin ] = useState();
  const [ players, setPlayers ] = useState([]);

  const fetchRoom = async () => {
    const roomName = get(match, "params.name");

    const res = await fetch(`${API_URL}/rooms/${roomName}`);
    const room = await res.json();
    setRoom(room);
    setPlayers(room.players);
    setRoomAdmin(room.players.find(p => p.roomAdmin));
  }

  useEffect(() => { fetchRoom() }, []);

  useEffect(() => {
    const roomName = get(match, "params.name");
    const socket = io(process.env.REACT_APP_API_URL);
    socket.on(`${roomName}_newPlayerRegistered`, player => {
      setPlayers([ ...players, player ]);
    });
  });

  if (Object.keys(room).length === 0) {
    return null;
  }
  
  if (room.status === 'OPEN') {
    return (
      <RoomOpen 
        joinUrl={joinUrl}
        players={players}
        roomAdmin={roomAdmin}
      />
    )
  } else {
    return (
      <RoomInProgress players={room.players} />
    )
  }
}

export default withRouter(Room);