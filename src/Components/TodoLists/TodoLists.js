import React, { useContext } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';

import sty from './TodoLists.module.css';

import Delete from '../../Assets/Delete.svg';

import { deleteList } from '../../store/actions';
import { context } from '../../store/store';

const TodoLists = ({ title, data, listId, index }) => {
  const { dispatch } = useContext(context);
  console.log(data);
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
        {data.map(todo => (
          <Todo key={todo.id} todo={todo} listId={listId} index={index} />
        ))}
        <AddTodo type={'Todo'} listId={listId} index={index} />
      </div>
    </div>
  );
};

export default TodoLists;
