import {useState, useEffect} from "react"; //USEeFFECT İLE YAŞAM DÖNGÜSÜNEDKİ EVENTLER YAKALANIR

function App(){
  const [number, setNumber]= useState(0);
  const [name,setName]= useState("Mehmet");

  useEffect(()=>{
    console.log(" name State Güncellendi!");

  }, [name])

  useEffect(()=>{
    console.log("Component Mount edildi!");

  }, []) //köşeli parantez component mount edildiği anı yakalamak içerisine hangi statei değiştirmek istiyosan onu yazarsın

  return(
    <div className="App">
      <h1>{number}</h1>
      <button onClick={()=> setNumber(number+1)}>Click</button>

      <h1>{name}</h1>
      <button onClick={()=> setName("Mete")}>Click</button>
    </div>
  )
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// import { useState } from 'react';

// function App() {
//   const [name, setName] =useState("Mehmet"); //state i oluşturma
//   const [age, setAge]= useState(24);
//   const [friends, setFriens] =useState(['Ahmet','Murat']);
//   const [address, setAddress] = useState({title:"Ataşehir", zip:5555})


//   return (
//     <div className="App">
//       <h1>Merhaba {name}</h1>
//       <h2>{age}</h2>
//       <button onClick={()=> setName("Ahmet")}>Change name</button>
//       <button onClick={()=> setAge(30)}>Change age</button>

//       <hr></hr>

//       <br></br>
//       <h2>Friends</h2>

//       {
//         friends.map((friend,key)=> <div key={key}>{friend}</div>)
//       }

// <button onClick={()=> setFriens([...friends,'Ayşe','İrem'])}>Change age</button>


// <hr></hr>

// <br></br>
// <h2>Adres</h2>
// <div>{address.title} {address.zip}</div>

// <button onClick={()=> setAddress({...address, title:'Ankara'})}>Change adress</button>
//     </div>
//   );
// }

// export default App;
