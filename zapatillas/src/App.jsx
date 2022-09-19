import './App.css';
import Navbar from './components/Navbar';
import Zapass from './containers/Zapass';
import ItemDetailContainer from './components/ItemDetailContainer';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

const App = () =>{
  return (
   <BrowserRouter >
    <Navbar/>
    <Routes>

    <Route path='/' element= {  <Zapass/>} />
    <Route path='/Category/:id' element= {  <Zapass/>} />
  
     </Routes>
     </BrowserRouter>
  );
}



export default App;

