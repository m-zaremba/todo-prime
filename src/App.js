import React, {useState} from 'react';
import {Header} from './components/layout/Header';
import {Content} from './components/layout/Content';
import {ProjectsProvider, SelectedProjectProvider} from './context'

export const App = ({darkModeDefault = false, sidebarMobileShowDefault = false}) => {
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
