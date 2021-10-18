import React from 'react';
import Link from 'next/link';
import styles from '../styles/navbar.module.css';

const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      <div className={styles.logo}>
        <Link href="/">
          <a className="fas fa-syringe">
            <i className="fas fa-capsules" />
          </a>
        </Link>
      </div>
      <form className={styles.search}>
        <input placeholder="Search..." />
        <button type="submit">
          <span className="fas fa-search" />
        </button>
      </form>
      <div className={styles.shoppingCart}>
        <Link href="/cart">
          <a>
            <i className="fas fa-shopping-cart" />
            <span>Cart</span>
          </a>
        </Link>
      </div>
      <div className={styles.user}>
        <Link href="\login">
          <a>
            <i className="fas fa-user" />
            <span>Sign in</span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
