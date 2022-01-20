import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

function App() {
  const [name, setName] =useState("Mehmet"); //state i oluşturma
  const [age, setAge]= useState(24);
  return (
    <div className="App">
      <h1>Merhaba {name}</h1>
      <h2>{age}</h2>
      <button onClick={()=> setName("Ahmet")}>Change name</button>
      <button onClick={()=> setAge(30)}>Change age</button>
    </div>
  );
}

export default App;
