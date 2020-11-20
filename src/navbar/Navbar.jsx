import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Contextapi/Datacenter';
export default function Navbar() {
  const { productc } = useContext(Context);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home{' '}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Addnew">
                Addnew
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Cards">
                my Card ({productc.length})
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
