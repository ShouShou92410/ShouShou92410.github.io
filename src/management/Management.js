import React, { useContext } from 'react';
import { UserContext } from '../utility/Context';
import ManagementView from './ManagementView';

function Management() {
  const { currentUser } = useContext(UserContext);
  const tables = ['vocabulary'];

  return currentUser && <ManagementView tables={tables} />;
}

export default Management;
