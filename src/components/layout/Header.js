import React, {useState} from 'react';
import {FaCog} from 'react-icons/fa';
import {AddTask} from '../AddTask';
import {firebase} from '../../firebase';

export const Header = ({darkMode, setDarkMode, sidebarMobileShow, setSidebarMobileShow}) => {
  const [shouldShowMain, setShouldShowMain] = useState(false);
  const [showQuickAddTask, setShowQuickAddTask] = useState(false);
  const [showSettings, setShowSettings] = useState(false);


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
            <li className='settings__add'>
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
            <li className='settings__menu-button'>
              <button
                data-testid='show-menu-settings'
                aria-label='Settings show/hide'
                type='button'
                onClick={() => setShowSettings(!showSettings)}
                onKeyDown={() => setShowSettings(!showSettings)}
              >
                <FaCog className='settings__menu-button-icon'/>
              </button>
            </li>
          </ul>
        </div>
        {showSettings &&
          <div className="settings__menu-list">
            <ul className='settings__menu-list-buttons'>
              <li>
                <button onClick={() => {setDarkMode(!darkMode); setShowSettings(false)}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-svgs-path="sm1/theme.svg"><g fill="currentColor" fillRule="evenodd"><path fillRule="nonzero" d="M14.505 19.09c.345.617.733.84 1.464.842.653.001 1.417-.43 2.015-1.104C19.418 17.173 20 15.383 20 12.23 20 7.679 16.413 4 12 4s-8 3.68-8 8.23c0 2.465.59 4.183 1.727 4.675.765.332 1.37.33 2.306.068.175-.049.217-.061.685-.207 1.168-.362 1.85-.503 2.761-.483 1.595.022 2.237.71 2.772 2.192l.028.078c.099.273.157.414.226.536zm-.873.488c-.528-.943-.44-2.271-2.166-2.295-2.407-.053-3.783 1.558-6.136.54C3.467 17.017 3 14.459 3 12.23 3 7.133 7.03 3 12 3s9 4.133 9 9.23c0 3.528-.734 5.492-2.26 7.253-.678.764-1.693 1.45-2.773 1.449-1.08-.003-1.807-.411-2.335-1.354z"></path><path d="M11.909 7.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3.214 1.17a1 1 0 1 1 1.286-1.532 1 1 0 0 1-1.286 1.532zm1.71 2.962a1 1 0 1 1 1.97-.348 1 1 0 0 1-1.97.348zM16.24 15a1 1 0 1 1 1.732 1 1 1 0 0 1-1.732-1zm-9.254-3.368a1 1 0 1 1-1.97-.348 1 1 0 0 1 1.97.348zm1.71-2.962A1 1 0 1 1 7.41 7.138 1 1 0 0 1 8.695 8.67z"></path></g></svg>
                  <span>Theme</span>
                </button>
              </li>
              <li className="separator"><div></div></li>
              <li>
                <button className='settings__logout-btn' onClick={() => firebase.auth().signOut()}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" data-svgs-path="sm1/leave.svg"><g fill="none" fillRule="evenodd"><path stroke="currentColor" d="M6.5 8.3V5.63c0-1.17.9-2.13 2-2.13h7c1.1 0 2 .95 2 2.13v11.74c0 1.17-.9 2.13-2 2.13h-7c-1.1 0-2-.95-2-2.13V14.7"></path><path fill="currentColor" d="M12.8 11l-2.15-2.15a.5.5 0 1 1 .7-.7L14 10.79a1 1 0 0 1 0 1.42l-2.65 2.64a.5.5 0 0 1-.7-.7L12.79 12H4.5a.5.5 0 0 1 0-1h8.3z"></path></g></svg>
                  <span>Log Out</span>
                </button>
              </li>
            </ul>
          </div>}
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
