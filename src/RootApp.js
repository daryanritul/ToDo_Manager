import React, { useReducer } from 'react';
import App from './App';
import { context } from './store/store';

import reducer from './store/reducer';

const intialState = [
  {
    title: 'MY Workspace',
    todos: [],
    activity: [],
  },
];

const RootApp = () => {
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <context.Provider value={{ state: state, dispatch }}>
      <App />
    </context.Provider>
  );
};

export default RootApp;
