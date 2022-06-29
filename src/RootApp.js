import React, { useReducer } from 'react';
import App from './App';
import { context } from './store/store';

import reducer from './store/reducer';

const intialState = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : {
      workspace: [
        {
          wid: 'sd2as2d2a2333sda',
          title: 'My Workspace',
          totalTodos: 0,
          todoLists: [
            {
              id: 0,
              list: 'My Todos',
              todo: [],
            },
          ],
          completed: [],
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
