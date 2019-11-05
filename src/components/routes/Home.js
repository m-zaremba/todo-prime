import React, {useState} from 'react';
import {Header} from '../layout/Header';
import {Content} from '../layout/Content';
import {ProjectsProvider, SelectedProjectProvider} from '../../context';

export const Home = ({darkModeDefault = false, sidebarMobileShowDefault = false}) => {
  const [darkMode, setDarkMode] = useState(darkModeDefault);
  const [sidebarMobileShow, setSidebarMobileShow] = useState(sidebarMobileShowDefault);


  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <main
          data-testid='application'
          className={darkMode? 'darkmode' : undefined}>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} sidebarMobileShow={sidebarMobileShow} setSidebarMobileShow={setSidebarMobileShow}/>
          <Content showSidebar={sidebarMobileShow} setShowSidebar={setSidebarMobileShow}/>
        </main>
      </ProjectsProvider>
    </SelectedProjectProvider>)
};
