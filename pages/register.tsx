import React from 'react';
import { useFormik } from 'formik';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import styles from '../styles/login.module.css';

import { User } from '../interfaces';
import { registerSchema } from '../validators';
import { register } from '../utils/users';
import { redirect } from 'next/dist/server/api-utils';

type CreateUser = Omit<User, 'role'>;

const initialValues: CreateUser = {
  name: '',
  email: '',
  password: '',
};

const Register = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues,
    validationSchema: registerSchema,
    onSubmit: async (values) => {
      await register(values)
        .then(() => router.push('/login'))
        .catch((error) => {
          const err = error.response;
          if (err.status == 500) {
            throw new Error(err);
          }
          formik.setErrors(err.data);
        });
    },
  });

  const { errors, values, handleChange, handleSubmit, touched } = formik;

  function hasError(field: string): boolean {
    return !!errors[field] && !!touched[field];
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div className={hasError('name') ? styles.input_error : styles.input}>
          <input
            name="name"
            placeholder="Name"
            onChange={handleChange}
            value={values.name}
          />
          {hasError('name') && <p className={styles.error}>{errors.name}</p>}
        </div>
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
