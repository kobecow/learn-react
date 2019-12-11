import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Map'

function App() {
  const initTIme = 2004;
  return (
    <div class="row">
      {//<div class="twoCol">
      }

      <Map year={initTIme} />
      {/*
        < TimeArea year = { initTIme } />
        <GasList />
      </div>
      <div class="twoCol">
    
        <twoDGraph />
      </div>
    </div>
    */}
    </div>
  );
}

export default App;
