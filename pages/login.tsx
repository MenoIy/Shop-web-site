import React from 'react';
import Link from 'next/link';

import styles from '../styles/login.module.css';

const Login = () => {
  return (
    <div className={styles.container}>
      <form>
        <div className={styles.input}>
          <input placeholder="Email" />
          <p className={styles.error}>Error</p>
        </div>
        <div className={styles.input}>
          <input type="password" placeholder="Password" />
          <p className={styles.error}>Error</p>
        </div>
        <button type="submit">Login</button>
        <Link href="/forgot">
          <a> Forgot password ?</a>
        </Link>
        <div className={styles.redirect}>
          <p>{"Don't have an account ?"}</p>
          <Link href="/register">
            <a>Register</a>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
