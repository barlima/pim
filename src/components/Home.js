import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      Home

      <Link to="/room/new">
        <button>
          New Game
        </button>
      </Link>
    </div>
  )
}

export default Home;