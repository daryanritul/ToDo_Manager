import React, { useContext, useState } from 'react';
import {
  addWorkspace,
  deleteWorkspace,
  selectSpace,
} from '../../store/actions';
import { context } from '../../store/store';

import sty from './Sidebar.module.css';

import Delete from '../../Assets/Delete.svg';
import { v4 } from 'uuid';

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
              placeholder={'Enter Workspace Name'}
              onKeyDown={event => {
                if (event.key === 'Enter') {
                  if (item.value !== '') {
                    addWorkspace(
                      {
                        wid: v4(),
                        title: item.value,
                        todos: [],
                        activity: [],
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
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
