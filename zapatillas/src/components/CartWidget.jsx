import { BsCart3 } from "react-icons/bs";
import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const CartWidget = () => {

   const {totalProductos} = useContext(CartContext)

   return(
      <>
    <span>< BsCart3  className="carrito"></BsCart3> {totalProductos()} </span>
    </>
   )
}

export default CartWidget;