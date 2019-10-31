import React, {useState} from 'react';
import {FaRegListAlt, FaRegCalendarAlt} from 'react-icons/fa';
import moment from 'moment';
import {firebase} from '../firebase';
import {useSelectedProjectValue} from '../context';
import {ProjectOverlay} from './ProjectOverlay';
import {TaskDate} from './TaskDate';

export const AddTask = ({
  showAddTaskMain = true,
  shouldShowMain = false,
  showQuickAddTask,
  setShowQuickAddTask
}) => {
  const [task, setTask] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [project, setProject] = useState('');
  const [showMain, setShowMain] = useState(shouldShowMain);
  const [showProjectOverlay, setShowProjectOverlay] = useState(false);
  const [showTaskDate, setShowTaskDate] = useState(false);

  const {selectedProject} = useSelectedProjectValue();

  const addTask = () => {
    const projectId = project || selectedProject;
    let collatedDate = '';

    if (projectId === 'TODAY') {
      collatedDate = moment().format('DD/MM/YYYY');
    } else if (projectId === 'NEXT_7') {
      collatedDate = moment().add(7, 'days').format('DD/MM/YYYY');
    }

    return (
      task &&
      projectId &&
      firebase
        .firestore()
        .collection('tasks')
        .add({
          archived: false,
          projectId,
          task,
          date: collatedDate || taskDate,
          userId: 'testUserForTheAppDevelopment'
        })
        .then(() => {
          setTask('');
          setProject('');
          setShowMain('');
          setShowProjectOverlay(false);
        })
    );
  }

  return (
    <div
      className={showQuickAddTask ? 'add-task add-task__overlay' : 'add-task'}
      data-testid='add-task-comp'
    >
      {showAddTaskMain && (
        <div
          className="add-task__shallow"
          aria-label='Add task'
          data-testid='show-main-action'
          onClick={() => setShowMain(!showMain)}
          onKeyDown={() => setShowMain(!showMain)}
          tabIndex={0}
          role='button'
        >
          <span className="add-task__plus">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" data-svgs-path="sm1/plus.svg"><path fill="currentcolor" fillRule="evenodd" d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z"></path></svg>
          </span>
          <span className="add-task__text">Add task</span>
        </div>
      )}

      {(showMain || showQuickAddTask) && (
        <div className="add-task__main" data-testid='add-task-main'>
          {showQuickAddTask && (
            <>
              <div data-testid='quick-add-task'>
                <h2 className="header">Quick Add Task</h2>
                <span
                  className="add-task__cancel-x"
                  aria-label='Cancel adding task'
                  data-testid='add-task-quick-cancel'
                  onClick={() => {
                    setShowMain(false);
                    setShowProjectOverlay(false);
                    setShowQuickAddTask(false);
                  }}
                  onKeyDown={() => {
                    setShowMain(false);
                    setShowProjectOverlay(false);
                    setShowQuickAddTask(false);
                  }}
                  tabIndex={0}
                  role='button'
                >
                  <svg viewBox="0 0 24 24" class="icon_close" width="24" height="24"><path fill="currentColor" d="M5.146 5.146a.5.5 0 0 1 .708 0L12 11.293l6.146-6.147a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 0 .708L12.707 12l6.147 6.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.708 0L12 12.707l-6.146 6.147a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1 0-.708L11.293 12 5.146 5.854a.5.5 0 0 1-.057-.638z"></path></svg>
                </span>
              </div>
            </>
          )}
          <ProjectOverlay
            setProject={setProject}
            showProjectOverlay={showProjectOverlay}
            setShowProjectOverlay={setShowProjectOverlay}/>
          <TaskDate
            setTaskDate={setTaskDate}
            showTaskDate={showTaskDate}
            setShowTaskDate={setShowTaskDate}/>
          <input
            type="text"
            className="add-task__content"
            data-testid='add-task-content'
            placeholder='e.g. arrange a meeting at 11'
            value={task}
            onChange={e => setTask(e.target.value)}
          />
          <button
            className="add-task__submit"
            type='button'
            data-testid='add-task'
            onClick={() =>
              showQuickAddTask
                ? addTask() && setShowQuickAddTask(false)
                : addTask()}
          >
            Add Task
          </button>
          {!showQuickAddTask && (
            <span
              className="add-task__cancel"
              data-testid='add-task-main-cancel'
              onClick={() => {
                setShowMain(false);
                setShowProjectOverlay(false);
              }}
              onKeyDown={() => {
                setShowMain(false);
                setShowProjectOverlay(false);
              }}
              tabIndex={0}
              aria-label='Cancel adding a task'
              role='button'
            >
              Cancel
            </span>
          )}
          <span
            className="add-task__project"
            data-testid='show-project-overlay'
            onClick={() => {setShowProjectOverlay(!showProjectOverlay)}}
            onKeyDown={() => {setShowProjectOverlay(!showProjectOverlay)}}
            tabIndex={0}
            role='button'
          >
            <FaRegListAlt />
          </span>
          <span
            className="add-task__date"
            data-testid='show-task-date-overlay'
            onClick={() => setShowTaskDate(!showTaskDate)}
            onKeyDown={() => setShowTaskDate(!showTaskDate)}
            tabIndex={0}
            role='button'
          >
            <FaRegCalendarAlt />
          </span>
        </div>
      )}
    </div>
  );
};
