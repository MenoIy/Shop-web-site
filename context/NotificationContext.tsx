import React from 'react';
import { Notification } from '../interfaces';

type State = Notification[];
type Setter = React.Dispatch<React.SetStateAction<State>>;

const NotificationStateContext = React.createContext<State>([]);
const NotificationStateUpdater = React.createContext<Setter | undefined>(
  undefined
);

export const NotificationProvider = (props: { children: React.ReactNode }) => {
  const [notifications, setNotifications] = React.useState<State>([]);

  return (
    <NotificationStateContext.Provider value={notifications}>
      <NotificationStateUpdater.Provider value={setNotifications}>
        {props.children}
      </NotificationStateUpdater.Provider>
    </NotificationStateContext.Provider>
  );
};

export const useNotificationState = () => {
  const state = React.useContext(NotificationStateContext);

  if (state === undefined) {
    throw new Error(
      'useNotificationState must be used inside a NotificationProvider'
    );
  }

  return state;
};

export const useNotificationUpdater = () => {
  const updater = React.useContext(NotificationStateUpdater);

  if (updater === undefined) {
    throw new Error(
      'useNotificationUpdater must be used inside a NotificationProvider'
    );
  }

  return updater;
};
