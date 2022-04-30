import React, { useContext, useState } from 'react';

import sty from './Todo.module.css';

import Delete from '../../Assets/Delete.svg';
import TodoModal from '../TodoModal/TodoModal';
import { context } from '../../store/store';
import { deleteTodo } from '../../store/actions';

const Todo = ({ todo, listId, index }) => {
  console.log(todo);
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
    console.log('Dome', status);
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

  return (
    <>
      {/* {toogleTodo && <TodoModal todo={todo} setToggle={setToggle} />} */}

      <div
        className={sty.todo}
        onClick={() => {
          setToggle(true);
        }}
      >
        <div className={sty.todoHead}>
          <p className={sty.title}>{todo.title}</p>
          <div className={sty.icons} onClick={event => deleteTodoHander(event)}>
            <img src={Delete} />
          </div>
        </div>
        <div className={sty.todoFoot}>
          <div className={sty.status}>
            <div
              className={sty.statusDot}
              style={{
                backgroundColor: dotColor,
              }}
            ></div>
            <p className={sty.text}>{todo.status}</p>
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
