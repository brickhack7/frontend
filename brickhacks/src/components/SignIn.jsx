import React, {useState} from "react";
import { Link, Redirect } from 'react-router-dom';
import {auth, signInWithGoogle} from '../firebase'
import Button from 'react-bootstrap/Button'

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [toProfile, setToProfile] = useState(false);
    
    const signInWithEmailAndPasswordHandler = (event, email, password) => {
      event.preventDefault();
      auth.signInWithEmailAndPassword(email, password).catch(error => {
        setError("Error signing in with password and email!");
        console.error("Error signing in with password and email", error);
      });
      setToProfile(true)
    };

    const signInWithGoogleHandler = () => {
      signInWithGoogle()
      setToProfile(true)
    };

      const onChangeHandler = (event) => {
          const {name, value} = event.currentTarget;

          if(name === 'userEmail') {
              setEmail(value);
          }
          else if(name === 'userPassword'){
            setPassword(value);
          }
      };

  return (
    <div className="mt-8">
      {toProfile ? <Redirect to="/profile" /> : null}
      <h1 className="text-3xl mb-2 text-center font-bold">Sign In</h1>
      <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
        {error !== null && <div className = "py-4 bg-red-600 w-full text-white text-center mb-3">{error}</div>}
        <form className="text-center my-3">
          <label htmlFor="userEmail" className="block">
            Email:
          </label>
          <input
            type="email"
            className="text-center my-3"
            name="userEmail"
            value = {email}
            placeholder="E.g: faruq123@gmail.com"
            id="userEmail"
            onChange = {(event) => onChangeHandler(event)}
          />
          <label htmlFor="userPassword" className="block">
            Password:
          </label>
          <input
            type="password"
            className="text-center my-3"
            name="userPassword"
            value = {password}
            placeholder="Your Password"
            id="userPassword"
            onChange = {(event) => onChangeHandler(event)}
          />
          <Button variant="primary" onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}>
            Sign in
          </Button>
        </form>
        <p className="text-center my-3">or</p>
        <div className="text-center my-3">
          <Button variant="secondary" onClick={() => signInWithGoogleHandler()}>
          Sign in with Google
          </Button>
        </div>
        <p className="text-center my-3">
          Don't have an account?{" "}
          <Link to="signUp" className="text-blue-500 hover:text-blue-600">
            Sign up here
          </Link>{" "}
          <br />{" "}
          <Link to = "passwordReset" className="text-blue-500 hover:text-blue-600">
            Forgot Password?
          </Link>
        </p>
      </div>
    </div>
  );
};
export default SignIn;