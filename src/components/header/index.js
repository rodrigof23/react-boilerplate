import React from 'react';

import { useStateValue } from '../../state';
import { logout } from '../../state/auth/actions';

import styles from './header.module.scss';

const Header = () => {
  const [{ auth }, dispatch] = useStateValue();

  const handleLogout = async () => {
    await dispatch(logout());
  };

  return (
    <div className={styles.nav}>
      <h1>Header</h1>
      <nav>
        {auth.logged && (
          <button onClick={() => handleLogout()} type="submit">
            Logout
          </button>
        )}
      </nav>
    </div>
  );
};

export default Header;
