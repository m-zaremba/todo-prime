import React from 'react';
import {FaSpaceShuttle, FaSun, FaRegPaperPlane} from 'react-icons/fa';
import moment from 'moment';

export const TaskDate = ({setTaskDate, showTaskDate, setShowTaskDate}) => {


  return (
    showTaskDate && (
      <div className="task-date" data-testid='task-date-overlay'>
        <ul className="task-date__list">
          <li>
            <div
              onClick={() => {
                setShowTaskDate(false);
                setTaskDate(moment().format('DD/MM/YYYY'));
              }}
              onKeyDown={() => {
                setShowTaskDate(false);
                setTaskDate(moment().format('DD/MM/YYYY'));
              }}
              aria-label='Select today as the task date'
              data-testid='task-date-today'
              tabIndex={0}
              role="button"
            >
              <span>
                <FaSpaceShuttle className='today-icon'/>
              </span>
              <span>Today</span>
            </div>
          </li>
          <li>
            <div
              onClick={() => {
                setShowTaskDate(false);
                setTaskDate(moment().add(1, 'day').format('DD/MM/YYYY'));
              }}
              onKeyDown={() => {
                setShowTaskDate(false);
                setTaskDate(moment().add(1, 'day').format('DD/MM/YYYY'));
              }}
              role="button"
              tabIndex={0}
              aria-label='Select tomorrow as the task date'
              data-testid='task-date-tomorrow'
            >
              <span>
                <FaSun className='tomorrow-icon'/>
              </span>
              <span>Tomorrow</span>
            </div>
          </li>
          <li>
            <div
              onClick={() => {
                setShowTaskDate(false);
                setTaskDate(moment().add(7, 'days').format('DD/MM/YYYY'));
              }}
              onKeyDown={() => {
                setShowTaskDate(false);
                setTaskDate(moment().add(7, 'days').format('DD/MM/YYYY'));
              }}
              tabIndex={0}
              role="button"
              aria-label='Select next week as the task date'
              data-testid='task-date-next-week'
            >
              <span>
                <FaRegPaperPlane className='next_7-icon'/>
              </span>
              <span>Next week</span>
            </div>
          </li>
        </ul>
      </div>
    )
  )
}
