import React from 'react';
import { useFormik } from 'formik';
import Link from 'next/link';
import styles from '../styles/login.module.css';

import { User } from '../interfaces';
import { registerSchema } from '../validators';

interface CreateUser extends User {
  password: string;
  [id: string]: string;
}

const initialValues: CreateUser = {
  email: '',
  password: '',
};

const Register = () => {
  const { errors, values, handleChange, handleSubmit, touched } = useFormik({
    initialValues,
    validationSchema: registerSchema,
    onSubmit: (values) => {
      console.log('values', values);
    },
  });

  function hasError(field: string): boolean {
    return !!errors[field] && !!touched[field];
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div className={hasError('email') ? styles.input_error : styles.input}>
          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={values.email}
          />
          {hasError('email') && <p className={styles.error}>{errors.email}</p>}
        </div>
        <div
          className={hasError('password') ? styles.input_error : styles.input}
        >
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            value={values.password}
          />
          {hasError('password') && (
            <p className={styles.error}>{errors.password}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={hasError('email') || hasError('password')}
        >
          Register
        </button>
        <div className={styles.redirect}>
          <p>Already have an account ?</p>
          <Link href="/login">
            <a> Sign in</a>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
