import { useSelector, useDispatch } from 'react-redux';
// import { FcLinux } from 'react-icons/fc';
import s from './UserMenu.module.css';
import { getUser } from '../../redux/auth/auth-selectors';
import { logout } from '../../redux/auth/auth-operations';
import Button from 'react-bootstrap/esm/Button';

const UserMenu = () => {
    const dispatch = useDispatch();
  const { email } = useSelector(getUser);

  const onLogout =()=>dispatch(logout())
  

  return (
    <div className={s.container}>
      {/* <FcLinux className={s.avatar} /> */}
      <span className={s.name}>{ email }</span>
      <Button
        className={s.btn}
        variant="outline-danger"
        type="button"
        onClick={onLogout}
      >
        Logout
      </Button>
    </div>
  );
};

export default UserMenu;