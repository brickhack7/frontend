import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

// components
import LandingPage from './LandingPage';
import ProfilePage from './ProfilePage';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Explore from './Explore';
import Match from './Match';

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
              <Route exact path="/profile">
                <ProfilePage />
            </Route>
            <Route exact path="/explore">
                <Explore /> 
            </Route>
            <Route exact path="/matches">
                <Match /> 
            </Route>
            <Route exact path="/messages">
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