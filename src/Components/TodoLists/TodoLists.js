import React, { useContext, useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';

import sty from './TodoLists.module.css';

import Delete from '../../Assets/Delete.svg';

import { clearCompleted, deleteList } from '../../store/actions';
import { context } from '../../store/store';

const TodoLists = ({ title, data, listId, index, completed }) => {
  const { dispatch } = useContext(context);
  const [color, setColor] = useState('#000');

  const handleDelete = () => {
    deleteList(listId, dispatch);
  };

  const handleClearList = () => {
    clearCompleted(listId, dispatch);
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
          {title} (10)
        </div>
        {!completed && <img src={Delete} onClick={handleDelete} />}
        {completed && <img src={Delete} onClick={handleClearList} />}
      </div>
      <div className={sty.listBody}>
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
