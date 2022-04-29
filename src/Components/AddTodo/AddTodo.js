import React, { useContext, useState } from 'react';
import sty from './AddTodo.module.css';

import add from '../../Assets/Add.svg';
import cross from '../../Assets/Cross.svg';
import { addLists } from '../../store/actions';
import { context } from '../../store/store';
import { v4 } from 'uuid';

const AddTodo = ({ type }) => {
  const { state, dispatch } = useContext(context);

  const [toggle, setToggle] = useState(false);
  const [todo, setTodo] = useState('');
  const addTodoToList = () => {
    if (type === 'List') {
      addLists(
        {
          id: v4(),
          list: todo,
          todo: [],
        },
        dispatch
      );
    }
  };
  return (
    <>
      {toggle ? (
        <div className={`${sty.input} ${sty.btn}`}>
          <input
            type="text"
            placeholder={`Enter ${type} title here`}
            value={todo}
            onChange={event => setTodo(event.target.value)}
            onKeyDown={event => {
              if (event.key === 'Enter') {
                if (todo !== '') {
                  addTodoToList();
                }
                setTodo('');
              }
            }}
          />
          <img src={cross} onClick={() => setToggle(false)} />
        </div>
      ) : (
        <div>
          <div className={sty.btn} onClick={() => setToggle(!toggle)}>
            <img src={add} />
            <p>Add New {type}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default AddTodo;
