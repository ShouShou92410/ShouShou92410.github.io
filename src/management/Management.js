import React from 'react';
import ManagementView from './ManagementView';

function Management() {
  const tableList = ['user', 'vocabulary'];

  return <ManagementView tableList={tableList} />;
}

export default Management;
