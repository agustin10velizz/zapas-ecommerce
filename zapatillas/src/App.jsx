import './App.css';
import Navbar from './components/Navbar';
import Zapass from './containers/Zapass';
import Cart from './components/Cart'
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';

const App = () =>{
  return (
   <BrowserRouter >
    <Navbar/>
    <Routes>

    <Route path='/' element= {  <Zapass/>} />
    <Route path='/Category/:id' element= {  <Zapass/>} />
    <Route path='/prueba' element= {  <ItemDetailContainer/>} />
    <Route path='/cart' element= {  <Cart/>} />
     </Routes>
     </BrowserRouter>
  );
}



export default App;

