import React from 'react';
import { Notification } from '../interfaces';

type State = Notification[];
type Setter = React.Dispatch<React.SetStateAction<State>>;
type Action = {
  type: 'ADD' | 'DELETE';
  id?: number;
  notification?: Notification;
};

const NotificationStateContext = React.createContext<State>([]);

const NotificationDispatchContext = React.createContext<
  React.Dispatch<Action> | undefined
>(undefined);

const notificationReducer: React.Reducer<State, Action> = (
  state: State,
  action: Action
) => {
  const { type, notification, id } = action;

  switch (type) {
    case 'ADD': {
      if (notification) {
        return [...state, notification];
      }
      throw new Error('Must provide a notification for add action');
    }

    case 'DELETE': {
      if (id) {
        return state.filter((notification) => notification.id != id);
      }
      throw new Error('Must provide an id for delete action');
    }

    default: {
      throw new Error(`Unhandled notification action type: ${type}`);
    }
  }
};

export const NotificationProvider = (props: { children: React.ReactNode }) => {
  const [state, dispatch] = React.useReducer(notificationReducer, []);

  return (
    <NotificationStateContext.Provider value={state}>
      <NotificationDispatchContext.Provider value={dispatch}>
        {props.children}
      </NotificationDispatchContext.Provider>
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

export const useNotificationDispatch = () => {
  const dispatcher = React.useContext(NotificationDispatchContext);

  if (dispatcher === undefined) {
    throw new Error(
      'useNotificationDispatch must be used inside a NotificationProvider'
    );
  }

  return dispatcher;
};
