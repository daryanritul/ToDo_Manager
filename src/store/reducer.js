import { ADD_WORKSPACE, DELETE_WORKSPACE, SELECT_SPACE } from './actions.types';

export default (state, action) => {
  switch (action.type) {
    case ADD_WORKSPACE:
      return {
        ...state,
        workspace: [...state.workspace, action.payload],
        selectedIndex: state.workspace.length,
      };
    case DELETE_WORKSPACE:
      var newState = state.workspace.filter(
        item => item.wid !== action.payload
      );
      return {
        ...state,
        workspace: newState,
        selectedIndex: 0,
      };
    case SELECT_SPACE:
      return {
        ...state,
        selectedIndex: action.payload,
      };
  }
};
