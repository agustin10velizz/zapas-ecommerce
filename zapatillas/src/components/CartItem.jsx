import React from "react"
import { useContext } from "react"
import { CartContext } from "./CartContext"

const CartItem = ({produc}) => { 
    const {removeItem} = useContext(CartContext)

    return(
        <div className="cart"> 
        <h3>{produc.titulo}</h3>  

          <p> Talles disponibles :{produc.talles}  </p>   
          <p> Precio: ${produc.precio} </p> 
          <img src={produc.imagen} alt="" width="200" height="154" className="zapas" ></img> 
          <button onClick={() => removeItem(produc.id) } className='boton-compra btn btn-light' > Borrar compra</button>
          </div>
    )

}


export default CartItem