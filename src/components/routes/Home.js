import React, {useState, useContext} from 'react';
import {Header} from '../layout/Header';
import {Content} from '../layout/Content';
import {ProjectsProvider, SelectedProjectProvider} from '../../context';
import {AuthContext} from '../../context';

export const Home = ({darkModeDefault = false, sidebarMobileShowDefault = false}) => {
  const [darkMode, setDarkMode] = useState(darkModeDefault);
  const [sidebarMobileShow, setSidebarMobileShow] = useState(sidebarMobileShowDefault);
  const {currentUser} = useContext(AuthContext);

  console.log(currentUser.uid);



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
