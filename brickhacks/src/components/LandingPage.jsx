import React, {useState} from "react";
import { Redirect } from 'react-router-dom';

const LandingPage = () => {
  const [toSignUp, setToSignUp] = useState(false);
  return (
    <>
      {toSignUp ? <Redirect to="/signup" /> : null}
      <h1>Rendezvous</h1>
      <h2>Go on a new adventure with someone new</h2>
      <button className = "w-full py-3 bg-red-600 mt-4 text-white" onClick = {() => setToSignUp(true)}>Sign Up Now</button>
    </>
  ) 
};
export default LandingPage;