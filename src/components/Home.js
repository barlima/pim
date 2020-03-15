import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { createRoom } from './Room/helpers/room';

const Home = ({ history }) => {
  const [ errors, setErrors ] = useState([]);

  const createNewRoom = async () => {
    const room = await createRoom();

    if (room.error) {
      setErrors([ ...errors, "Something went wrong, please try agian."]);
      return;
    }

    history.push(`/room/${room}`);
  }


  return (
    <div>
      Home

      <button onClick={createNewRoom}>
        New Game
      </button>

      {
        errors.length > 0 && (
          <ul>
            { errors.map((e, i) => <li key={i}>{e}</li>)}
          </ul>
        )
      }
    </div>
  )
}

export default withRouter(Home);