import React from 'react';
import QRCode from 'qrcode.react';

import Navigation from '../Navigation';
import Players from './Players';
import RoomConfiguration from './RoomConfiguration';

const RoomOpen = ({ joinUrl, players, roomAdmin}) => {
  return (
    <div>
      <Navigation />
      <p>Copy the following URL or scan the QR code to join the room!</p>
      <input type="text" disabled value={joinUrl} />
      <QRCode value={joinUrl} />
      <Players players={players} />
      <RoomConfiguration roomAdmin={roomAdmin}/>
    </div>
  )
}

export default RoomOpen;