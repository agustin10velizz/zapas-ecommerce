import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './containers/ItemListContainer';
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

    <Route path='/' element= {  <ItemListContainer/>} />
    <Route path='/Category/:id' element= {  <ItemListContainer/>} />
    <Route path='/item/:id' element= {  <ItemDetailContainer/>} />
    <Route path='/cart' element= {  <Cart/>} />
    
     </Routes>
     </BrowserRouter>
     
     </CartContextProvider >
  );
}



export default App;

