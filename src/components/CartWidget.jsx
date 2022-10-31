import { BsCart3 } from "react-icons/bs";
import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const CartWidget = () => {

   const { totalProductos} = useContext(CartContext)

   return(
      <>
      {(totalProductos() != 0) &&<span className="carrito">< BsCart3 className="icono" ></BsCart3>{totalProductos()}</span>}
      
    </>
   )
}

export default CartWidget;