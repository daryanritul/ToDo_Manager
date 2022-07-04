import React, { useContext, useState } from 'react';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { resetWorkspace } from '../../store/actions';
import { context } from '../../store/store';

import { useHorizontalScroll } from '../../utils/useHorizontalScroll';

import AddTodo from '../AddTodo/AddTodo';
import ProgressBar from '../ProgressBar/ProgressBar';
import TodoLists from '../TodoLists/TodoLists';

import sty from './Body.module.css';
const Body = () => {
  const scrollref = useHorizontalScroll();
  const { state, dispatch } = useContext(context);
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
                Reset
              </p>
            </span>
          </div>
        </div>
        <DndProvider backend={HTML5Backend}>
          <div className={sty.todoBody} ref={scrollref}>
            {state.workspace[state.selectedIndex].todoLists.map(
              (list, index) => (
                <TodoLists
                  title={list.list}
                  key={index}
                  index={index}
                  data={list.todo}
                  listId={list.id}
                />
              )
            )}
            <TodoLists
              title={'Completed'}
              data={state.workspace[state.selectedIndex].completed}
              listId={'none'}
              completed
            />
          </div>
        </DndProvider>
      </div>
    </div>
  );
};

export default Body;
