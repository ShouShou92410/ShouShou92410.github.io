import React from 'react';
import Alert from 'react-bootstrap/Alert';

function Error() {
  return (
    <Alert variant="danger" className="text-center">
      <Alert.Heading>An error has occurred!</Alert.Heading>
      <p>Please don't do that agian. Thanks! :)</p>
    </Alert>
  );
}

export default Error;
