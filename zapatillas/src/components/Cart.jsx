import { useContext } from "react"
import { CartContext } from "./CartContext";
import CartItem from "./CartItem";

const Cart =( ) => {
  
  const {cartList, clear, } = useContext (CartContext);

    return (
        <>
        <h1 className="carritoo">Carrito</h1>
        <button onClick={clear} className='btn btn-primary' >Borrar todas las compras</button>
        {cartList.map (dato => <CartItem key={dato.id} produc={dato}/>)}
       
        </>
    )
}

export default Cart
