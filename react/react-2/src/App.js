import React, {useState} from 'react';
import { Product } from './components/Product';
import './style.css'


function App() {

  
  return (
    <div className="App">
      <div className="container">
        <div className="caption-row">
          <p className="caption-text">LATEST ARRIVALS IN MUSICA</p>
        </div>
        <div>
          <Product />
          
       </div>
      </div>
    </div>
  );
}

export default App;
