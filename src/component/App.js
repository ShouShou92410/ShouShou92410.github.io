import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavigationBar from './root/NavigationBar';
import Content from './root/Content';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <div className="pt-3" style={{ marginTop: '60px' }}>
        <Content />
      </div>
    </BrowserRouter>
  );
}

export default App;
