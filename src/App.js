import React from 'react';
import Discover from './Discover'
import TravelTypes from './TravelTypes';
import MainScreen from './MainScreen';
import './App.css';
import TopMenu from './TopMenu';

function App() {
  return (
    <div>
      <div className="App">
        <TopMenu />
        <Discover />
        <TravelTypes />
      </div>
      <div className="App-Left">
        <MainScreen />
      </div>
    </div>
  );
}

export default App;
