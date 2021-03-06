import React, {useState} from 'react';
import {FaTrashAlt} from 'react-icons/fa';
import {useProjectsValue, useSelectedProjectValue} from '../context';
import {firebase} from '../firebase';

export const IndividualProject = ({project, activeValue = null, showSidebar, setShowSidebar}) => {
  // eslint-disable-next-line
  const [active, setActive] = useState(activeValue);
  const [showConfirm, setShowConfirm] = useState(false);
  const {projects, setProjects} = useProjectsValue();
  const {setSelectedProject} = useSelectedProjectValue();

  const deleteProject = docId => {
    firebase
      .firestore()
      .collection('projects')
      .doc(docId)
      .delete()
      .then(() => {
        setProjects([...projects]);
        setSelectedProject('INBOX');
      })
  }

  return (
    <>
      <span className="sidebar__dot">•</span>
      <span className="sidebar__project-name"
        onKeyDown={() => {
          setActive(project.projectId);
          setSelectedProject(project.projectId);
          showSidebar && setShowSidebar(!showSidebar);
        }}
        onClick={() => {
          setActive(project.projectId);
          setSelectedProject(project.projectId);
          showSidebar && setShowSidebar(!showSidebar);
        }}
      >{project.name}</span>
      <span
        className="sidebar__project-delete"
        aria-label='Confirm deletion of a project'
        data-testid='delete-project'
        onClick={() => setShowConfirm(!showConfirm)}
        onKeyDown={() => setShowConfirm(!showConfirm)}
        tabIndex={0}
        role='button'
      >
        <FaTrashAlt />
        {showConfirm &&  (
          <div className="project-delete-modal">
            <div className="project-delete-modal__inner">
              <p>Are you sure you want to delete this project?</p>
              <div>
                <button type='button' onClick={() => deleteProject(project.docId)}>
                  Delete
                </button>
                <span
                  onClick={() => setShowConfirm(!showConfirm)}
                  onKeyDown={() => setShowConfirm(!showConfirm)}
                  tabIndex={0}
                  role='button'
                  aria-label='Cancel adding a project, do not delete'
                >
                  Cancel
                </span>
              </div>
            </div>
          </div>
        )}
      </span>
    </>
  )
}
