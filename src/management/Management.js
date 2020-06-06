import React, { useContext } from 'react';
import { UserContext } from '../utility/Context';
import ManagementView from './ManagementView';

function Management() {
  const { currentUser } = useContext(UserContext);
  const tableArray = ['vocabulary'];

  return currentUser && <ManagementView tableArray={tableArray} />;
}

export default Management;
