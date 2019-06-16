import React from 'react';
import SideNav from './SideNav';
import './App.css';

const NAVS = [
  {id: 'block1', name: 'BLOCK1'},
  {id: 'block2', name: 'BLOCK2'},
  {id: 'block3', name: 'BLOCK3'}
];

function App() {
  return (
    <div className="App">
      <div className="content">
        {
          NAVS.map(item => (
            <div className={item.id} id={item.id}>{item.id}</div>
          ))
        }
      </div>

      <div className="sideNavBox">
        <SideNav navs={NAVS} />
      </div>
    </div>
  );
}

export default App;
