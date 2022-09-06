import logo from './logo.svg';
import './App.css';

import React, {useState} from 'react';

  function App() {
    const [year,setYear]= useState('');
  
    const setValue = (e)=>{
      
      setYear(e.target.value);
  
    }
    const calculateYear = ()=>{
  
      let age = 2022 - year;
  
      if(age>=18){
        alert("You can vote")
      }else{
      alert("You can't vote")
    }
  
  
    }
    return (
      <div className="App">
        <input className="text" placeholder="Enter a year" onChange={(e)=>setValue}/>
  
        <button onClick= {calculateYear}>Submit</button>
     
        
        </div>
  );

}

export default App;
