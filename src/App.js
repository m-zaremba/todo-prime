import React from 'react';
import {Home} from './components/routes/Home';
import LogIn from './components/routes/LogIn';
import SignUp from './components/routes/SignUp';
import {Landing} from './components/routes/Landing';
import {AuthContext, AuthProvider} from './context';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {PrivateRoute} from "./PrivateRoute";

export const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path='/home' component={Home} />
          <Route exact path='/' component={Landing} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/login' component={LogIn} />
        </div>
      </Router>
    </AuthProvider>
  )
};
