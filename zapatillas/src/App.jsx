import './App.css';
import Navbar from './components/Navbar';
import Zapass from './containers/Zapass';
import Cart from './components/Cart'
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ItemDetailContainer from './containers/ItemDetailContainer';
import CartContextProvider from './components/CartContext';

const App = () =>{
  return (
    <CartContextProvider>
   
   <BrowserRouter >
    <Navbar/>
    <Routes>

    <Route path='/' element= {  <Zapass/>} />
    <Route path='/Category/:id' element= {  <Zapass/>} />
    <Route path='/item/:id' element= {  <ItemDetailContainer/>} />
    <Route path='/cart' element= {  <Cart/>} />
    
     </Routes>
     </BrowserRouter>
     </CartContextProvider >
  );
}



export default App;

