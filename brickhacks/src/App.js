import React from 'react';
import './App.css';
import UserProvider from "./providers/UserProvider";

function App() {
  return (
    <UserProvider>
      <Application />
    </UserProvider>
  );
}

export default App;