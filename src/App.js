import React from 'react';

import { Counter } from './features/counter/Counter';
import './App.css';
import Sidebar from './Sidebar';

function App() {
  return (
    //BEM meaningful naming!
    <div className="App">      
      {/* SideBar */}
      <Sidebar/>
      {/* Chat */}
    </div>
  );
}

export default App;
