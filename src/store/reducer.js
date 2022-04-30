import {
  ADD_LIST,
  ADD_TODO,
  ADD_WORKSPACE,
  DELETE_LIST,
  DELETE_TODO,
  DELETE_WORKSPACE,
  SELECT_SPACE,
} from './actions.types';

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

    case ADD_LIST:
      var newSpace = state.workspace[state.selectedIndex];
      var newList = [...newSpace.todoLists, action.payload];
      return {
        ...state,
        workspace: [
          ...state.workspace.slice(0, state.selectedIndex),
          {
            ...state.workspace[state.selectedIndex],
            todoLists: newList,
          },
          ...state.workspace.slice(state.selectedIndex + 1),
        ],
      };
    case DELETE_LIST:
      var newList = state.workspace[state.selectedIndex].todoLists.filter(
        list => list.id !== action.payload
      );
      return {
        ...state,
        workspace: [
          ...state.workspace.slice(0, state.selectedIndex),
          {
            ...state.workspace[state.selectedIndex],
            todoLists: newList,
          },
          ...state.workspace.slice(state.selectedIndex + 1),
        ],
      };
    case ADD_TODO:
      return {
        ...state,
        workspace: [
          ...state.workspace.slice(0, state.selectedIndex),
          {
            ...state.workspace[state.selectedIndex],
            todoLists: [
              ...state.workspace[state.selectedIndex].todoLists.slice(
                0,
                action.payload.index
              ),
              {
                ...state.workspace[state.selectedIndex].todoLists[
                  action.payload.index
                ],
                todo: [
                  ...state.workspace[state.selectedIndex].todoLists[
                    action.payload.index
                  ].todo,
                  action.payload.todo,
                ],
              },
              ...state.workspace[state.selectedIndex].todoLists.slice(
                action.payload.index + 1
              ),
            ],
          },
          ...state.workspace.slice(state.selectedIndex + 1),
        ],
      };

    case DELETE_TODO:
      var todos = state.workspace[state.selectedIndex].todoLists[
        action.payload.index
      ].todo.filter(todo => todo.id != action.payload.todoId);
      return {
        ...state,
        workspace: [
          ...state.workspace.slice(0, state.selectedIndex),
          {
            ...state.workspace[state.selectedIndex],
            todoLists: [
              ...state.workspace[state.selectedIndex].todoLists.slice(
                0,
                action.payload.index
              ),
              {
                ...state.workspace[state.selectedIndex].todoLists[
                  action.payload.index
                ],
                todo: todos,
              },
              ...state.workspace[state.selectedIndex].todoLists.slice(
                action.payload.index + 1
              ),
            ],
          },
          ...state.workspace.slice(state.selectedIndex + 1),
        ],
      };
  }
};
