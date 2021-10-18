import React from 'react';
import Head from 'next/head';

import NavBar from './NavBar';
import styles from '../styles/layout.module.css';

const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pharmacy</title>
      </Head>
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
