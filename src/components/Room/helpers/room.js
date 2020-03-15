export const API_URL = process.env.REACT_APP_API_URL;

export const createRoom = async () => {
  let res;

  try {
    res = await fetch(`${API_URL}/rooms`, {
      method: 'post'
    });
  } catch (error) {
    console.error(error);
    return;
  }

  const room = await res.json();
  return room.name;
}

export const addPlayerToRoom = async (name, room) => {
  let res;
  const data = { name };

  try {
    res = await fetch(`${API_URL}/rooms/${room}/players`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
  } catch(error) {
    console.error(error);
    return;
  }

  const player = await res.json();
  setPlayer(player);
  return player;
}

export const startRoom = async (room, rounds, duration) => {
  let res;
  const data = {
    rounds,
    roundDuration: duration
  }

  try {
    res = await fetch(`${API_URL}/rooms/${room}/start`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
  } catch (error) {
    console.error(error);
    return;
  }

  const updated = await res.json();
  return updated;
}

const LOCAL_STORAGE_KEY = 'pim_player';

export const setPlayer = (player) => {
  window.localStorage.setItem(LOCAL_STORAGE_KEY, player.id);
}

export const getPlayer = () => {
  return window.localStorage.getItem(LOCAL_STORAGE_KEY);
}