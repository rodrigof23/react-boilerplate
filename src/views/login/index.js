import React, { useEffect } from 'react';

import useLogin from '../../state/auth/hooks/useLogin';

import Form from './containers/form';
import Loading from '../../components/loading';

import styles from './login.module.scss';

const Login = ({ location, history }) => {
  const { from } = location.state || { from: { pathname: '/home' } };
  const [auth, setLogin, isLoading] = useLogin();

  useEffect(() => {
    if (auth.logged) {
      history.push(from);
    }
  }, [auth, from, history]);

  return (
    <div className={styles.container}>
      <Loading show={isLoading} />
      <Form onSubmit={(values, actions) => setLogin({ values, actions })} />
    </div>
  );
};

export default Login;
