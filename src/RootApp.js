import React, { useReducer } from 'react';
import App from './App';
import { context } from './store/store';

import reducer from './store/reducer';

const intialState = {
  workspace: [
    {
      wid: 'sd2as2d2a2333sda',
      title: 'My Workspace',
      todos: {
        pending: [],
        completed: [],
        process: [],
        overdue: [],
      },
      activity: [],
    },
  ],
  selectedIndex: 0,
};

const RootApp = () => {
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <context.Provider value={{ state: state, dispatch }}>
      <App />
    </context.Provider>
  );
};

export default RootApp;
