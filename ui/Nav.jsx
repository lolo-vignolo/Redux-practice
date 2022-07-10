import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link className="btn btn-outline-primary" to="/">
          Newspaper
        </Link>
        <Link className="btn btn-outline-primary" to="home">
          Music
        </Link>
        <Link className="btn btn-outline-primary" to="/ability">
          Ability-Poke
        </Link>
        <Link className="btn btn-outline-primary" to="/posts">
          Posts-Poke
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
