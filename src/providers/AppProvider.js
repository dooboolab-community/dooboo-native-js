import React, { useReducer } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { AppContext } from '../contexts';
import type { User } from '../types';

const AppConsumer = AppContext.Consumer;

type Props = { };
export type State = {
  user: User,
};

const initialState: State = {
  user: {
    displayName: '',
    age: 0,
    job: '',
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'change-theme-mode':
      return { ...state, theme: action.payload.theme };
    case 'reset-user':
      return { ...state, user: initialState.user };
    case 'set-user':
      return { ...state, user: action.payload };
    default:
      return null;
  }
};

function AppProvider(props: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
}

export { AppConsumer, AppProvider, AppContext };
