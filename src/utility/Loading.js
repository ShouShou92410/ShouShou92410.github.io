import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

function Loading({ isLoading, children, loadingMessage = 'Loading...' }) {
  const renderView = () => {
    if (isLoading) return children;
    else
      return (
        <h3 className="text-center">
          <Spinner animation="border" /> {loadingMessage}
        </h3>
      );
  };

  return renderView();
}

export default Loading;
