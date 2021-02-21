import React, { Component, createContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { auth } from '../firebase'

export const TokenContext = createContext({ token: null });
class TokenProvider extends Component {
    state = {
        token: null
    };

    componentDidMount = async () => {
        auth.onAuthStateChanged(async () => {
            const token = await firebase.auth().currentUser.getIdToken(/* forceRefresh */ true);
            console.log(token)
            this.setState({ token });
        });
    };

    render() {
        return (
            <TokenContext.Provider value={this.state.token}>
                {this.props.children}
            </TokenContext.Provider>
        );
    }
}
export default TokenProvider;


