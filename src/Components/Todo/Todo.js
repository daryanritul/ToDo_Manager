import React, { useContext, useState } from 'react';

import sty from './Todo.module.css';

import Delete from '../../Assets/Delete.svg';
import Checkmark from '../../Assets/Checkmark.svg';
import { context } from '../../store/store';
import { deleteTodo, markAsDone } from '../../store/actions';

const Todo = ({ todo, listName, listId, index, color, completed }) => {
  const [toogleTodo, setToogleTodo] = useState(false);
  const { dispatch } = useContext(context);
  var date = new Date(todo.dueDate);
  const dotColor =
    todo.status === 'pending'
      ? 'tomato'
      : todo.status === 'inprogress'
      ? 'yellow'
      : todo.status === 'completed'
      ? 'green'
      : 'red';

  const setToggle = status => {
    setToogleTodo(status);
  };

  const deleteTodoHander = event => {
    deleteTodo(
      {
        index,
        todoId: todo.id,
      },
      dispatch
    );
    console.log('done');
  };
  const markAsDoneHandler = () => {
    markAsDone(
      {
        index,
        todoId: todo.id,
        todo,
      },
      dispatch
    );
  };

  return (
    <>
      <div
        className={sty.todo}
        onClick={() => {
          setToggle(true);
        }}
      >
        <div className={sty.todoHead}>
          <p className={sty.title}>{todo.title}</p>
          {!completed && (
            <div className={sty.iconBox}>
              <div
                className={`${sty.icons} ${sty.green}`}
                onClick={event => markAsDoneHandler(event)}
              >
                <img src={Checkmark} />
              </div>
              <div
                className={sty.icons}
                onClick={event => deleteTodoHander(event)}
              >
                <img src={Delete} />
              </div>
            </div>
          )}
        </div>
        <div className={sty.todoFoot}>
          <div className={sty.status}>
            <div
              className={sty.statusDot}
              style={{
                backgroundColor: color,
              }}
            ></div>
            <p className={sty.text}>{todo.listName}</p>
          </div>
          <div className={sty.date}>
            Due{' '}
            {date.getDate() +
              '/' +
              (date.getMonth() + 1) +
              '/' +
              date.getFullYear()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
