import React, { useContext, useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';

import sty from './TodoLists.module.css';

import Delete from '../../Assets/Delete.svg';

import {
  addTodo,
  clearCompleted,
  deleteList,
  deleteTodo,
  markAsDone,
} from '../../store/actions';
import { context } from '../../store/store';

import { v4 } from 'uuid';

import { useDrop } from 'react-dnd';
const TodoLists = ({ title, data, listId, index, completed }) => {
  const { dispatch } = useContext(context);
  const [color, setColor] = useState('#000');

  const handleDelete = () => {
    deleteList(listId, dispatch);
  };

  const handleClearList = () => {
    clearCompleted(listId, dispatch);
  };
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'todos',
    drop: item => dropHandler(item),
    collect: monitor => ({
      isOver: monitor.isOver(),
    }),
  }));

  const dropHandler = ({ listName, index: idx, todo, todoId }) => {
    if (title !== listName && title === 'Completed') {
      markAsDone(
        {
          index: idx,
          todo,
          todoId,
        },
        dispatch
      );
    } else if (title !== listName) {
      addTodo(
        {
          id: listId,
          index,
          todo: {
            ...todo,
            id: v4(),
            listName: title,
          },
        },
        dispatch
      );
      deleteTodo(
        {
          index: idx,
          todoId,
        },
        dispatch
      );
    }
  };

  return (
    <div className={sty.todoList}>
      <div className={sty.listHead}>
        <div className={sty.title}>
          <input
            type={'color'}
            className={sty.colorDot}
            onChange={event => setColor(event.target.value)}
            style={{
              backgroundColor: color,
            }}
            disabled={completed}
          />
          {title} ({data.length})
        </div>
        {!completed && <img src={Delete} onClick={handleDelete} />}
        {completed && <img src={Delete} onClick={handleClearList} />}
      </div>
      <div className={sty.listBody} ref={drop}>
        {data.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            listId={listId}
            index={index}
            color={color}
            completed={completed}
          />
        ))}
        {isOver && <div className={sty.todoSkleton}></div>}
        {!completed && (
          <AddTodo
            type={'Todo'}
            listId={listId}
            index={index}
            listName={title}
          />
        )}
      </div>
    </div>
  );
};

export default TodoLists;
