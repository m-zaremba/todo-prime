import React, {useState} from 'react';
import {FaPalette} from 'react-icons/fa';
import {AddTask} from '../AddTask';

export const Header = ({darkMode, setDarkMode}) => {
  const [shouldShowMain, setShouldShowMain] = useState(false);
  const [showQuickAddTask, setShowQuickAddTask] = useState(false);


  return (
    <header className="header" data-testid='header'>
      <nav>
        <div className="logo">
          <img src='images/logo.png' alt='Todoist' />
        </div>
        <div className="settings">
          <ul>
            <li
              className='settings__add'
            >
              <button
                data-testid='quick-add-task-action'
                type='button'
                aria-label='Quick add task'
                onClick={() => {
                  setShowQuickAddTask(true);
                  setShouldShowMain(true);
                }}
                onKeyDown={() => {
                  setShowQuickAddTask(true);
                  setShouldShowMain(true);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" data-svgs-path="sm1/plus.svg"><path fill="currentcolor" d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z"></path></svg>
              </button>
            </li>
            <li
              className='settings__darkmode'
            >
              <button
                data-testid='dark-mode-action'
                aria-label='Darkmode on/off'
                type='button'
                onClick={() => setDarkMode(!darkMode)}
                onKeyDown={() => setDarkMode(!darkMode)}
              >
                <FaPalette />
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <AddTask
        showAddTaskMain={false}
        shouldShowMain={shouldShowMain}
        showQuickAddTask={showQuickAddTask}
        setShowQuickAddTask={setShowQuickAddTask}
      />
        </header>
  )
}
