import React from 'react';
import Head from 'next/head';

import NavBar from './NavBar';
import styles from '../styles/layout.module.css';
import Notification from './Notification';
import { NotificationProvider } from '../context/NotificationContext';

const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pharmacy</title>
      </Head>
      <NavBar />
      <NotificationProvider>
        <Notification />
        {children}
      </NotificationProvider>
    </div>
  );
};

export default Layout;
