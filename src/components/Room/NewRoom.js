import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import get from 'lodash/get';
import { createRoom, addPlayerToRoom } from './helpers/room';

const NewRoom = ({ history }) => {
  const [errors, setErrors ] = useState([]);

  const submit = async event => {
    event.preventDefault();

    const name = get(event, "target.name.value");

    if (!name) {
      setErrors([ ...errors, "Name must contain at least on character."]);
      return;
    }

    const room = await createRoom();

    if (room.error) {
      setErrors([ ...errors, "Something went wrong, please try agian."]);
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
      New Room

      <form onSubmit={submit}>
        <label>Your name</label>
        <input type="text" name="name" />
        <input type="submit" value="Create"/>
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

export default withRouter(NewRoom);