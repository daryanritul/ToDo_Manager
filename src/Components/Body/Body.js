import React, { useContext, useState } from 'react';
import { context } from '../../store/store';
import Activity from '../Activity/Activity';
import ProgressBar from '../ProgressBar/ProgressBar';
import TodoLists from '../TodoLists/TodoLists';
import TodoModal from '../TodoModal/TodoModal';

import sty from './Body.module.css';

const Body = () => {
  const [toogleTodo, setToogleTodo] = useState(false);
  const { state, dispatch } = useContext(context);
  const setToggle = status => {
    setToogleTodo(status);
  };

  return (
    <div className={sty.body}>
      <div className={sty.todos}>
        <div className={sty.todoHead}>
          <span>
            <p className={sty.workTitle}>
              {state.workspace[state.selectedIndex].title}
            </p>
            <div className={sty.newTodo} onClick={() => setToggle(true)}>
              add new todo
            </div>
          </span>
          <ProgressBar percentage={'40%'} />
        </div>
        <div className={sty.todoBody}>
          <TodoLists title="Pending" />
          <TodoLists title="In Progress" />
          <TodoLists title="Completed" />
          <TodoLists title="Overdue" />
        </div>
      </div>
      <div className={sty.activity}>
        <Activity />
      </div>
      {toogleTodo && <TodoModal todo={false} setToggle={setToggle} />}
    </div>
  );
};

export default Body;
