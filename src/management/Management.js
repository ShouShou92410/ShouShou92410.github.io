import React, { useContext } from 'react';
import { UserContext } from '../utility/Context';
import ManagementView from './ManagementView';

function Management() {
  const { currentUser } = useContext(UserContext);
  const tableList = ['user', 'vocabulary'];

  return currentUser && <ManagementView tableList={tableList} />;
}

export default Management;
