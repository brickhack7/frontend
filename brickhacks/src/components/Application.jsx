import React, {Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

// components
import LandingPage from './LandingPage';
import ProfilePage from './ProfilePage';
import SignIn from './SignIn';
import SignUp from './SignUp';

function Application() {
  const user = null;
  return (
    <Fragment>
      <Router>
        <div className="container">
        {user ?
            <ProfilePage />
          :
          <Switch>
            <Route exact path="/">
              <LandingPage /> 
            </Route>
            <Route exact path="/signup">
              <SignUp /> 
            </Route>
            <Route exact path="/signin">
              <SignIn /> 
            </Route>
          </Switch>
        }
        </div>
      </Router>
    </Fragment>
  );
}

export default Application;