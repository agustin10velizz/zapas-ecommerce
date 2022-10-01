import { useContext } from "react"
import { CartContext } from "./CartContext";
import CartItem from "./CartItem";

const Cart =( ) => {
  
  const {cartList, clear, totalDeProductosPrecio } = useContext (CartContext);

    return (
        <>
        <h1 className="carritoo">Carrito</h1>
        <button onClick={clear} className='btn btn-primary' >Borrar todas las compras</button>
        {cartList.map (dato => <CartItem key={dato.id} produc={dato}/>)}
        <b> Total: {totalDeProductosPrecio()}  </b>
       
        </>
    )
}

export default Cart
