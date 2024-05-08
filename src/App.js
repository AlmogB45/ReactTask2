import React from 'react';
import './App.css';
import Pixa from './components/Pixa';
import Query from './components/Query';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2><u>Almog's Pixa Image Search App</u></h2>
          <Pixa />
      </header>
    </div>
  );
}

export default App;