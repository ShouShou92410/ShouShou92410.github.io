import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { UserContext } from '../utility/Context';
import { firebase } from '../services/Firebase';
import MenuBar from './MenuBar';
import Content from './Content';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [authorizing, setAuthorizing] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        setCurrentUser(authUser);
        setAuthorizing(true);
      } else {
        setCurrentUser(null);
        setAuthorizing(true);
      }
    });
  }, []);

  return authorizing ? (
    <UserContext.Provider value={{ currentUser }}>
      <BrowserRouter>
        <MenuBar />
        <Content />
      </BrowserRouter>
    </UserContext.Provider>
  ) : (
    <div>Waiting for auth...</div>
  );
}

export default App;
