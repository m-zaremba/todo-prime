import {useState, useEffect, useContext} from 'react';
import {firebase} from '../firebase';
import {collatedTasksExist} from '../helpers';
import {AuthContext} from '../context';
import moment from 'moment';


export const useTasks = selectedProject => {
  const [tasks, setTasks] = useState([]);
  const [archivedTasks, setArchivedTasks] = useState([]);
  const {currentUser} = useContext(AuthContext);

  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection('tasks')
      .where('userId', '==', currentUser.uid);

      unsubscribe = selectedProject && !collatedTasksExist(selectedProject) ?
      (unsubscribe = unsubscribe.where('projectId', '==', selectedProject))
      : selectedProject === 'TODAY'
      ? (unsubscribe = unsubscribe.where(
        'date',
        '==',
        moment().format('DD/MM/YYYY')
      ))
      : selectedProject === 'INBOX' || selectedProject === 0
      ? (unsubscribe = unsubscribe.where('date', '==', ''))
      : unsubscribe;

      unsubscribe = unsubscribe.onSnapshot(snapshot => {
        const newTasks = snapshot.docs.map(task => ({
          id: task.id,
          ...task.data(),
        }));

        setTasks(
          selectedProject === 'NEXT_7'
          ? newTasks.filter(
            task => moment(task.date, 'DD/MM/YYYY').diff(moment(), 'days') <= 7 && task.archived !== true
          )
          : newTasks.filter(task => task.archived !== true)
        );

        setArchivedTasks(newTasks.filter(task => task.archived !== false))
      });

      return () => unsubscribe();
      // eslint-disable-next-line
  }, [selectedProject]);

  return {tasks, archivedTasks};
};

export const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const {currentUser} = useContext(AuthContext);

  useEffect(() => {
    firebase
      .firestore()
      .collection('projects')
      .where('userId', '==', currentUser.uid)
      .orderBy('projectId')
      .get()
      .then(snapshot => {
        const allProjects = snapshot.docs.map(project => ({
          ...project.data(),
          docId: project.id,
        }));

        if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
          setProjects(allProjects);
        }
      });
      // eslint-disable-next-line
  }, [projects]);

  return {projects, setProjects};
};
