import React from 'react';
import Toast from './Toast';
import styles from '../styles/notification.module.css';
import { useNotificationState } from '../context/NotificationContext';

const Notification = () => {
  const notifications = useNotificationState();

  return (
    <div className={styles.container}>
      {notifications.map((notification) => (
        <Toast key={notification.id} {...notification} />
      ))}
    </div>
  );
};

export default Notification;
