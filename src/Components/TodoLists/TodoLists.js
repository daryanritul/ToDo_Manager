import React, { useContext } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';

import sty from './TodoLists.module.css';

import Delete from '../../Assets/Delete.svg';

import { deleteList } from '../../store/actions';
import { context } from '../../store/store';

const TodoLists = ({ title, data, listId }) => {
  const { dispatch } = useContext(context);
  const dummyTodo = [
    {
      title: 'Create Wireframe',
      uid: '1',
      status: 'pending',
      createdAt: Date.now(),
      dueDate: '2022-01-01',
    },
    {
      title: 'Create Wireframe',
      uid: '2',
      status: 'overdue',
      createdAt: Date.now(),
      dueDate: '2022-04-06',
    },
  ];

  const handleDelete = () => {
    deleteList(listId, dispatch);
  };

  return (
    <div className={sty.todoList}>
      <div className={sty.listHead}>
        <div className={sty.title}>{title} (10)</div>
        <img src={Delete} onClick={handleDelete} />
      </div>
      <div className={sty.listBody}>
        {dummyTodo.map((todo, index) => (
          <Todo key={index} todo={todo} />
        ))}
        <AddTodo type={'Todo'} />
      </div>
    </div>
  );
};

export default TodoLists;
