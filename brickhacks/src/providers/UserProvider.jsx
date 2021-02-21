import React, { Component, createContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { auth, generateUserDocument } from '../firebase'

export const UserContext = createContext({ user: null });
class UserProvider extends Component {
  state = {
    user: null,
    // token: null
  };

  componentDidMount = async () => {
    auth.onAuthStateChanged(async userAuth => {
      // let user = await generateUserDocument(userAuth);
      let user = await firebase.auth().currentUser;
      this.setState({ user });
      console.log('user now', user)
      // this.setState({ token });
    });
  };

  render() {
    return (
      <UserContext.Provider value={this.state.user}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
export default UserProvider;


