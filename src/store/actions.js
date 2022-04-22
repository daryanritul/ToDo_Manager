import { ADD_WORKSPACE, DELETE_WORKSPACE, SELECT_SPACE } from './actions.types';

export const addWorkspace = (data, dispatch) => {
  dispatch({
    type: ADD_WORKSPACE,
    payload: data,
  });
};

export const deleteWorkspace = (data, dispatch) => {
  dispatch({
    type: DELETE_WORKSPACE,
    payload: data,
  });
};

export const selectSpace = (data, dispatch) => {
  dispatch({
    type: SELECT_SPACE,
    payload: data,
  });
};
