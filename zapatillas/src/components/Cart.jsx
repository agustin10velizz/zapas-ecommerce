import { useContext } from "react"
import { CartContext } from "./CartContext";

const Cart =() => {
  
  const {cartList, clear,} = useContext (CartContext);

    return (
        <>
        <h1>Carrito</h1>
        <button onClick={clear} >Borrar todas las compras</button>
        {
            cartList.map (products => <li> {products.titulo}  <img src={products.imagen} alt="" width="200" height="154" className="zapas" ></img> </li> )
        }
        </>
    )
}

export default Cart
