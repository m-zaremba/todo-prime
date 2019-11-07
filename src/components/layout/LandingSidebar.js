import React from 'react';


export const LandingSidebar = ({showLandingMenu, setShowSignup, setShowLogin}) => {

  return (
    <nav className={showLandingMenu ? 'landing__sidebar-open' : 'landing__sidebar'}>
      <div className='landing__sidebar-content'>
        <ul className='landing__sidebar-login' onClick={() => setShowLogin(true)}>
          <li>Login</li>
        </ul>
        <ul className='landing__sidebar-signup' onClick={() => setShowSignup(true)}>
          <li>Signup</li>
        </ul>
      </div>
    </nav>
  )
}
