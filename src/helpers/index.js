import {collatedTasks} from '../constants';

export getCollatedTasksExist = selectedProject =>
  collatedTasks.find(task => task.key === selectedProject);
