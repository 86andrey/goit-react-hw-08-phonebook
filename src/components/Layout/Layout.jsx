// import { NavBar } from 'components';
import { Outlet } from 'react-router-dom';
import s from '../Layout/Layout.module.css';
import { NavLink } from 'react-router-dom';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import useAuth from '../../shared/hooks/useAuth';

const Layout = () => {
    const isLogin = useAuth();
  return (
      <>
          <div className={s.form}>
      <header className={s.header} >
                <NavLink to="/" className={({ isActive }) => isActive ? s.activeLink : s.link}>
                  Phonebook
                </NavLink>
              {isLogin && (<NavLink to="/contacts" className={({ isActive }) => isActive ? s.activeLink : s.link}>
                    Contacts
                  </NavLink>)}
              <div className={s.authnav}>
                {isLogin ? <UserMenu /> : <AuthNav />}
              </div>
      </header>
              <Outlet />
              </div>
    </>
  );
};

export default Layout;