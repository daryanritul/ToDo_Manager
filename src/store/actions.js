import {
  ADD_LIST,
  ADD_TODO,
  ADD_WORKSPACE,
  CLEAR_COMPLETED,
  DELETE_LIST,
  DELETE_TODO,
  DELETE_WORKSPACE,
  MARK_AS_DONE,
  RESET_WORKSPACE,
  SELECT_SPACE,
} from './actions.types';

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

export const addLists = (data, dispatch) => {
  dispatch({
    type: ADD_LIST,
    payload: data,
  });
};

export const deleteList = (data, dispatch) => {
  dispatch({
    type: DELETE_LIST,
    payload: data,
  });
};
export const addTodo = (data, dispatch) => {
  dispatch({
    type: ADD_TODO,
    payload: data,
  });
};
export const deleteTodo = (data, dispatch) => {
  dispatch({
    type: DELETE_TODO,
    payload: data,
  });
};
export const markAsDone = (data, dispatch) => {
  dispatch({
    type: MARK_AS_DONE,
    payload: data,
  });
};
export const clearCompleted = (data, dispatch) => {
  dispatch({
    type: CLEAR_COMPLETED,
    payload: data,
  });
};
export const resetWorkspace = (data, dispatch) => {
  dispatch({
    type: RESET_WORKSPACE,
    payload: data,
  });
};
