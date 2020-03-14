import React from 'react';

const Players = ({ players }) => {
  return (
    <div>
      Players:
      {
        <ul>
          {
            players.map(player => (
              <li key={player.id}>{player.name}</li>
            ))
          }
        </ul>
      }
    </div>
  )
}

export default Players;