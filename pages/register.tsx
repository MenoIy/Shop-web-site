import React from 'react';
import Link from 'next/link';
import styles from '../styles/login.module.css';

const Register = () => {
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
        <button type="submit">Register</button>
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
