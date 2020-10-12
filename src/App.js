import React from 'react';

import { Counter } from './features/counter/Counter';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';

function App() {
  return (
    //BEM meaningful naming!
    <div className="app">      
      {/* SideBar */}
      <Sidebar/>
      {/* Chat */}
      <Chat/>
    </div>
  );
}

export default App;
