import React from 'react';
import {Home} from './components/routes/Home';
import {Landing} from './components/routes/Landing';
import {AuthProvider} from './context';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {PrivateRoute} from "./PrivateRoute";

export const App = () => {

  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path='/home' component={Home} />
          <Route exact path='/' component={Landing} />
        </div>
      </Router>
    </AuthProvider>
  )
};
