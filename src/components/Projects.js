import React, {useState} from 'react';
import {useProjectsValue} from '../context';
import {IndividualProject} from './IndividualProject';

export const Projects = ({activeValue = null, showSidebar, setShowSidebar}) => {
  const [active] = useState(activeValue);
  // const {setSelectedProject} = useSelectedProjectValue();
  const {projects} = useProjectsValue();


  return (
    projects &&
    projects.map(project => (
      <li
        key={project.projectId}
        data-doc-id={project.docId}
        data-testid='project-action-parent'
        className={
          active === project.projectId
            ? 'active sidebar__project'
            : 'sidebar__project'
        }
      >
        <div
          aria-label={`Select ${project.name} as the task project`}
          role='button'
          data-testid='project-action'
          tabIndex={0}
          // onKeyDown={() => {
          //   setActive(project.projectId);
          //   setSelectedProject(project.projectId);
          //   showSidebar && setShowSidebar(!showSidebar);
          // }}
          // onClick={() => {
          //   setActive(project.projectId);
          //   setSelectedProject(project.projectId);
          //   showSidebar && setShowSidebar(!showSidebar);
          // }}
        >
          <IndividualProject project={project} showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
        </div>
      </li>
    ))

  )
}
