import React, { useContext, useState } from 'react';
import sty from './Sidebar.module.css';

import {
  addWorkspace,
  deleteWorkspace,
  selectSpace,
} from '../../store/actions';
import { context } from '../../store/store';

import Delete from '../../Assets/Delete.svg';

import { v4 } from 'uuid';

import { NextPlan } from '@styled-icons/material';

const Sidebar = () => {
  const { state, dispatch } = useContext(context);
  const [cnfDelete, setCnfDelete] = useState(false);
  const [item, setItem] = useState({
    value: '',
    status: false,
  });
  const deleteSpaceHandler = () => {
    deleteWorkspace(cnfDelete, dispatch);
    setCnfDelete(false);
  };
  const setWorkspaceIndex = index => {
    selectSpace(index, dispatch);
  };
  return (
    <>
      {cnfDelete && (
        <div className={sty.confirm}>
          <p>Deleting a workspace delete all Todos and Progress</p>
          <span>
            <button onClick={() => deleteSpaceHandler()}>Confrim Delete</button>
            <button onClick={() => setCnfDelete(false)}>Cancel Delete</button>
          </span>
        </div>
      )}
      <div className={sty.sidebar}>
        <div className={sty.logo}>
          <NextPlan className={sty.logoIcons} />
          What's <span> Next</span>
        </div>
        <p className={sty.title}>My Workspaces</p>
        <div className={sty.worklist}>
          {state.workspace.map((workspace, index) => (
            <div
              key={index}
              className={`${sty.workitem} ${
                index === state.selectedIndex ? sty.active : ''
              }`}
              onClick={() => setWorkspaceIndex(index)}
            >
              {workspace.title}
              {index === state.selectedIndex && index !== 0 && (
                <span
                  className={sty.icons}
                  onClick={() => setCnfDelete(workspace.wid)}
                >
                  <img src={Delete} />
                </span>
              )}
            </div>
          ))}
        </div>
        <div className={sty.buttonBox}>
          {!item.status ? (
            <button
              className={sty.button}
              onClick={() => {
                setItem({
                  ...item,
                  status: true,
                });
              }}
            >
              Add new Workspace
            </button>
          ) : (
            <input
              type={'text'}
              className={`${sty.button} ${sty.input}`}
              onChange={event =>
                setItem({
                  ...item,
                  value: event.target.value,
                })
              }
              value={item.value}
              autoFocus={item.status}
              placeholder={'Enter Workspace Name'}
              onKeyDown={event => {
                if (event.key === 'Enter') {
                  if (item.value !== '') {
                    addWorkspace(
                      {
                        wid: v4(),
                        title: item.value,
                        totalTodos: 0,
                        todoLists: [
                          {
                            id: 0,
                            list: 'My Todos',
                            todo: [],
                          },
                        ],
                        completed: [],
                      },
                      dispatch
                    );
                  }
                  setItem({
                    value: '',
                    status: false,
                  });
                }
              }}
              onBlur={() =>
                setItem({
                  value: '',
                  status: false,
                })
              }
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
