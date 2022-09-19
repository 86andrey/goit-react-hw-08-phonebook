import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import s from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <Nav>
      <NavLink
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        to="/register"
      >
        Register
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        to="/login"
      >
        Login
      </NavLink>
    </Nav>
  );
};

export default AuthNav;