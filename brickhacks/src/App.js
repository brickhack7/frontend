import React from 'react';
import './App.css';
import Application from './components/Application';
import UserProvider from "./providers/UserProvider";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <UserProvider>
      <Application />
    </UserProvider>
  );
}

export default App;