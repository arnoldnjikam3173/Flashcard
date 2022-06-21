
import './App.css';
import Flashcard from './components/Flashcard';
import { useState,useEffect } from 'react';

import wcc from 'world-countries-capitals';
const App=() =>{
  const [country,setCountry]= useState({});
  const getData= ()=>{
    const name=wcc.getRandomCountry();
    const data= wcc.getCountryDetailsByName(name);
    return data.length>0? data[0]:{};
  }

  useEffect(()=>{
    const data=getData();
    setCountry(data);
  },[]);


  return (
    <Flashcard data={country}/>
  );
}

export default App;
