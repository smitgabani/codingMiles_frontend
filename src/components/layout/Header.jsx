import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { AccountContext } from './Account';
import { useDispatch } from 'react-redux';
import { appLogout, appLogin } from '../../features/user';

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

function LoggedInView({ user, logout }) {
  const dispatch = useDispatch();
  return (
    <ul className="nav navbar-nav pull-xs-right">
      <li className="nav-item">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>

      <li
        className="nav-item"
        onClick={() => {
          dispatch(appLogout());
          logout();
        }}
      >
        <div className="nav-link">Logout</div>
      </li>

      <li className="nav-item" style={{ paddingLeft: 100 }}>
        <Link to={`/user/${user.username}`} className="nav-link">
          {user.username}
        </Link>
      </li>
    </ul>
  );
}

export default function Header({ user }) {
  const dispatch = useDispatch();
  const { getSession, logout } = useContext(AccountContext);
  useEffect(() => {
    getSession().then((session) => {
      dispatch(
        appLogin({
          email: session.idToken.payload.email,
          username: session.accessToken.payload.username,
          idToken: session.idToken.jwtToken,
          accessToken: session.accessToken.jwtToken,
          refreshToken: session.refreshToken.token,
        })
      );
    });
  }, []);
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Coding Miles
        </Link>
        {user && <LoggedInView user={user} logout={logout} />}
        {!user && <LoggedOutView />}
      </div>
    </nav>
  );
}
