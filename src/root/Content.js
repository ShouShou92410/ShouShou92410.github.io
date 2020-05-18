import React, { useContext } from 'react';
import { UserContext } from '../utility/Context';
import ContentView from './ContentView';

function Content() {
  const { currentUser } = useContext(UserContext);

  return <ContentView currentUser={currentUser} />;
}

export default Content;
