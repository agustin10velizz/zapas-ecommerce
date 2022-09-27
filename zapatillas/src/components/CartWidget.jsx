import { BsCart3 } from "react-icons/bs";
import React from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const CartWidget = () => {

   const {totalDeProductos} = useContext(CartContext)


   return(
      <>
    {(totalDeProductos() != 0) && <span>< BsCart3  className="carrito">{totalDeProductos()}</BsCart3></span>}
    </>
   )
}

export default CartWidget;