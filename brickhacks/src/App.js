import React, {Fragment, useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

// components
import LandingPage from './components/LandingPage';
import ProfilePage from './components/ProfilePage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  const user = null;
  return (
    <Fragment>
      <Router>
        <div className="container">
        {user ?
            <ProfilePage />
          :
          <Switch>
            {/* <Route exact path="/signup" render={ 
              <SignUp /> 
            }/> */}
            <Route exact path="/">
              <LandingPage /> 
            </Route>
            <Route exact path="/signup">
              <SignUp /> 
            </Route>
            <Route exact path="/signup">
              <SignIn /> 
            </Route>
          </Switch>
        }
        </div>
      </Router>
    </Fragment>
  );
}

export default App;