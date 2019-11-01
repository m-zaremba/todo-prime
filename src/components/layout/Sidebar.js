import React, {useState} from 'react';
import {FaChevronDown, FaInbox, FaRegCalendarAlt, FaRegCalendar} from 'react-icons/fa';
import {useSelectedProjectValue} from '../../context';
import {Projects} from '../Projects';
import {AddProject} from '../AddProject';

export const Sidebar = ({showSidebar, setShowSidebar}) => {
  const {setSelectedProject} = useSelectedProjectValue();
  const [active, setActive] = useState('inbox');
  const [showProjects, setShowProjects] = useState(true);

  return(
    <>
      {showSidebar ? <div className="backshadow" onClick={() => setShowSidebar(!showSidebar)}></div> : null}
      <div className={!showSidebar ? 'sidebar' : 'sidebar__open'} data-testid='sidebar'>
        <ul className="sidebar__generic">
          <li
            data-testid="inbox"
            className={active === 'inbox' ? 'active' : undefined}
          >
            <div
              aria-label='Show inbox tasks'
              data-testid="inbox-action"
              tabIndex={0}
              role="button"
              onClick={() => {
                setActive('inbox');
                setSelectedProject('INBOX');
                showSidebar && setShowSidebar(!showSidebar);
              }}
              onKeyDown={() => {
                setActive('inbox');
                setSelectedProject('INBOX');
                showSidebar && setShowSidebar(!showSidebar);
              }}
            >
              <span>
                <FaInbox className='inbox-icon' />
              </span>
              <span>Inbox</span>
            </div>
          </li>
          <li
            data-testid="today"
            className={active === 'today' ? 'active' : undefined}
          >
            <div
              aria-label="Show today's tasks"
              data-testid="today-action"
              tabIndex={0}
              role="button"
              onClick={() => {
                setActive('today');
                setSelectedProject('TODAY');
                showSidebar && setShowSidebar(!showSidebar);
              }}
              onKeyDown={() => {
                setActive('today');
                setSelectedProject('TODAY');
                showSidebar && setShowSidebar(!showSidebar);
              }}
            >
              <span>
                <FaRegCalendar className='today-icon'/>
              </span>
              <span>Today</span>
            </div>
          </li>
          <li
            data-testid="next_7"
            className={active === 'next_7' ? 'active' : undefined}
          >
            <div
              aria-label='Show tasks for the next 7 days'
              data-testid="next_7-action"
              tabIndex={0}
              role="button"
              onClick={() => {
                setActive('next_7');
                setSelectedProject('NEXT_7');
                showSidebar && setShowSidebar(!showSidebar);
              }}
              onKeyDown={() => {
                setActive('next_7');
                setSelectedProject('NEXT_7');
                showSidebar && setShowSidebar(!showSidebar);
              }}
            >
              <span>
                <FaRegCalendarAlt className='next_7-icon' />
              </span>
              <span>Next 7 days</span>
            </div>
          </li>
        </ul>

        <div
          aria-label='Show/Hide projects'
          className="sidebar__middle"
          onClick={() => setShowProjects(!showProjects)}
          onKeyDown={() => setShowProjects(!showProjects)}
          role='button'
          tabIndex={0}
        >
          <span><FaChevronDown className={!showProjects ? 'hidden-projects' : undefined}/></span>
          <h2>Projects</h2>
        </div>

        <ul className="sidebar__projects">{showProjects && <Projects showSidebar={showSidebar} setShowSidebar={setShowSidebar} />}</ul>

        {showProjects && <AddProject />}

      </div>
    </>
  )
}
