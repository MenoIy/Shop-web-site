import React from 'react';
import NavBar from './NavBar';

import styles from '../styles/layout.module.css';

const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
