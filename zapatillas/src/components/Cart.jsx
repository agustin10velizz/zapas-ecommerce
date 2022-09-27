import { useContext } from "react"
import { CartContext } from "./CartContext";

const Cart =( ) => {
  
  const {cartList, clear,removeItem, } = useContext (CartContext);

    return (
        <>
        <h1 className="carritoo">Carrito</h1>
        <button onClick={clear} className='btn btn-primary' >Borrar todas las compras</button>

        { cartList.map (products => <li className="cart"> <h3>{products.titulo}</h3>  
           
          <p> Talles :{products.talles}  </p>   
          <p> Precio: {products.precio} </p> 
          <img src={products.imagen} alt="" width="200" height="154" className="zapas" ></img> 
          <button onClick={() => removeItem(products.id) } className='boton-compra btn btn-secondary' > Borrar compra</button>
          </li>
             )
        }
        </>
    )
}

export default Cart
