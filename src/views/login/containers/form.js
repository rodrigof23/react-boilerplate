/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Formik } from 'formik';

const LoginForm = props => (
  <Formik initialValues={{ username: '', password: '' }} {...props}>
    {({ handleChange, handleBlur, values, handleSubmit, errors }) => (
      <div className="form_group">
        {errors.genericError && (
          <span className="error_text">{errors.genericError}</span>
        )}
        <input
          name="username"
          id="username"
          placeholder="Username"
          onChange={handleChange('username')}
          onBlur={handleBlur('username')}
          error={errors.username}
          value={values.username}
        />
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange('password')}
          onBlur={handleBlur('password')}
          error={errors.password}
          value={values.password}
        />
        <button onClick={handleSubmit} type="submit">
          Login
        </button>
      </div>
    )}
  </Formik>
);

export default LoginForm;
