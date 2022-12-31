import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { AccountContext } from './Account';
import Status from './Status';
function LoggedOutView() {
  if (true)
    return (
      <ul className="nav navbar-nav pull-xs-right">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Sign up
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Sign in
          </Link>
        </li>
      </ul>
    );
}

function LoggedInView({ user, status, logout }) {
  console.log(user);
  return (
    <ul className="nav navbar-nav pull-xs-right">
      <li className="nav-item">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>

      <li className="nav-item" onClick={logout}>
        <div className="nav-link">Logout</div>
      </li>

      <li className="nav-item" style={{ paddingLeft: 100 }}>
        <Link to="/user" className="nav-link">
          {user.username}
        </Link>
      </li>
    </ul>
  );
}

export default function Header() {
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState(false);
  const { getSession, logout, getUser } = useContext(AccountContext);
  useEffect(() => {
    getSession().then((session) => {
      console.log('Session:', session);
      setStatus(true);
    });
    getUser().then((user) => {
      console.log('Session:', user);
      setUser(user);
    });
  }, []);
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Coding Miles
        </Link>
        {user && <LoggedInView user={user} status={status} logout={logout} />}
        {!user && <LoggedOutView />}
      </div>
    </nav>
  );
}
