import React, {useState} from 'react';
import {FaPalette} from 'react-icons/fa';
import {AddTask} from '../AddTask';

export const Header = ({darkMode, setDarkMode, sidebarMobileShow, setSidebarMobileShow}) => {
  const [shouldShowMain, setShouldShowMain] = useState(false);
  const [showQuickAddTask, setShowQuickAddTask] = useState(false);


  return (
    <header className="header" data-testid='header'>
      <nav>
        <div className="logo">
          <img src='images/logo.png' alt='Todoist' />
          {
            sidebarMobileShow
              ?
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  data-svgs-path="sm1/close_big.svg"
                  onClick={() => setSidebarMobileShow(!sidebarMobileShow)}
                >
                  <path fill="currentColor" fillRule="evenodd" d="M11.3 12L5 5.9A.5.5 0 1 1 6 5l6.1 6.2L18.1 5a.5.5 0 0 1 .8.8L12.7 12l6.2 6.1a.5.5 0 0 1-.8.8L12 12.7 5.9 19A.5.5 0 0 1 5 18l6.2-6.1z"></path>
                </svg>
              :
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                data-svgs-path="sm1/menu.svg"
                onClick={() => setSidebarMobileShow(!sidebarMobileShow)}
              >
                <path fill="currentColor" fillRule="evenodd" d="M4.5 5h15a.5.5 0 1 1 0 1h-15a.5.5 0 0 1 0-1zm0 6h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1zm0 6h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1z"></path>
              </svg>
          }
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  data-svgs-path="sm1/plus.svg"
                >
                  <path fill="currentcolor" d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z"></path>
                </svg>
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
