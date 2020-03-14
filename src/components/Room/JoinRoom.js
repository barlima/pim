import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import get from 'lodash/get';

import Navigation from '../Navigation';
import { addPlayerToRoom } from './helpers/room';

const JoinRoom = ({ match, history }) => {
  const [errors, setErrors] = useState([]);

  const submit = async event => {
    event.preventDefault();

    const room = get(match, "params.name");
    const name = get(event, "target.name.value");

    if (!name) {
      setErrors([ ...errors, "Name must contain at least on character."]);
      return;
    }

    const player = await addPlayerToRoom(name, room);

    if (player.error) {
      setErrors([ ...errors, "Something went wrong, please try agian."]);
      return;
    }

    history.push(`/room/${room}`);
  }

  return (
    <div>
      <Navigation/>
      Join

      <form onSubmit={submit}>
        <input type="text" name="name" />
        <input type="submit" value="Join" />
      </form>

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

export default withRouter(JoinRoom);