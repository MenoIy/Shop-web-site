import React from 'react';
import Link from 'next/link';

import styles from '../styles/cart.module.css';

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.emptyCart}>
        <span className="fas fa-cart-plus" />
        <p>Your cart is Empty</p>
        <Link href="/">
          <a>Continue shoping</a>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
