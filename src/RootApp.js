import React, { useReducer } from 'react';
import App from './App';
import { context } from './store/store';

import reducer from './store/reducer';

const intialState = {
  workspace: [
    {
      wid: 'sd2as2d2a2333sda',
      title: 'My Workspace',
      todoLists: [
        {
          id: 0,
          list: 'Pending',
          todo: [],
        },
        {
          id: 1,
          list: 'Processing',
          todo: [],
        },
        {
          id: 2,
          list: 'Completed',
          todo: [],
        },
      ],
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
