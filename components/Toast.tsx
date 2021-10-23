import React, { useEffect } from 'react';
import styles from '../styles/toast.module.css';
import { useNotificationDispatch } from '../context/NotificationContext';

import { Notification } from '../interfaces';

const icones: { [key: string]: string } = {
  succes: 'fas fa-check-circle',
  error: 'fas fa-times-circle',
  warning: 'fas fa-exclamation-triangle',
  info: 'fas fa-info-circle',
};

const Toast = (props: Notification) => {
  const { id, status, message, autoDelete } = props;
  const dispatcher = useNotificationDispatch();

  useEffect(() => {
    const intervall = setTimeout(() => {
      if (autoDelete) {
        dispatcher({ type: 'DELETE', id });
      }
    }, 1500);
    return () => {
      clearTimeout(intervall);
    };
  }, [id, autoDelete, dispatcher]);

  return (
    <>
      <div className={`${styles[status]} ${styles.toast}`}>
        <div>
          <span className={`${icones[status]}`}></span>
        </div>
        <div className={styles.notif}>
          <p className={styles.title}>{status}</p>
          <p className={styles.message}>{message}</p>
        </div>
      </div>
    </>
  );
};

export default Toast;
