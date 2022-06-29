import React, { useContext, useState } from 'react';
import { resetWorkspace } from '../../store/actions';
import { context } from '../../store/store';
import Activity from '../Activity/Activity';
import AddTodo from '../AddTodo/AddTodo';
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
  console.log(
    'This =>',
    (state.workspace[state.selectedIndex].completed.length /
      state.workspace[state.selectedIndex].totalTodos) *
      100
  );
  return (
    <div className={sty.body}>
      <div className={sty.todos}>
        <div className={sty.todoHead}>
          <ProgressBar
            percentage={`${
              state.workspace[state.selectedIndex].completed.length
                ? (state.workspace[state.selectedIndex].completed.length /
                    state.workspace[state.selectedIndex].totalTodos) *
                  100
                : 0
            }%`}
          />
          <div className={sty.headDetails}>
            <p className={sty.workTitle}>
              {state.workspace[state.selectedIndex].title}
            </p>
            <span>
              <AddTodo type={'List'} />
              <p
                className={sty.reset}
                onClick={() => resetWorkspace('', dispatch)}
              >
                Reset Workspace
              </p>
            </span>
          </div>
        </div>
        <div className={sty.todoBody}>
          {state.workspace[state.selectedIndex].todoLists.map((list, index) => (
            <TodoLists
              title={list.list}
              key={index}
              index={index}
              data={list.todo}
              listId={list.id}
            />
          ))}
          <TodoLists
            title={'Completed'}
            data={state.workspace[state.selectedIndex].completed}
            listId={''}
            completed
          />
          {/* <AddTodo type={'List'} /> */}
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
