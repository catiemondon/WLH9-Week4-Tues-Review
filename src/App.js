import React from 'react';

import './App.css';
import Pet from './Components/Pet';

function App() {
  return (
    <div className="App">
      <header>My Pet Collection</header>
      <div className='pawprint-container'>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2j0Up6BAeT2vZi0KJ3j_vZEQGa_yNlLUpTTnPuSHpm9l9wB-Uag' alt='pawprints'/>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2j0Up6BAeT2vZi0KJ3j_vZEQGa_yNlLUpTTnPuSHpm9l9wB-Uag' alt='pawprints'/>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2j0Up6BAeT2vZi0KJ3j_vZEQGa_yNlLUpTTnPuSHpm9l9wB-Uag' alt='pawprints'/>
  
  
      </div>
      <Pet />
    </div>
  );
}

export default App;
