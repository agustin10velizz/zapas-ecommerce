import { useContext } from "react"
import { CartContext } from "./CartContext";
import CartItem from "./CartItem";
import {serverTimestamp, doc, setDoc, collection, updateDoc, increment} from "firebase/firestore";
import {db} from "../utils/fireBase";
const Cart =() => {
  
  const {cartList, clear, totalDeProductosPrecio } = useContext (CartContext);
  const test = useContext(CartContext)



  const createOrder = async() => {

    let dataDb = cartList.map(dato => ({
      id: dato.id,
      precio: dato.precio,
      titulo: dato.titulo
    }))


    let order ={
      buyer:{
        nombre: "agustin veliz",
        email: "agustinn@veliz",
        telefono: "123456789",
      },
      date: serverTimestamp(),
      items:  dataDb,
      total: test.totalDeProductosPrecio()
    }


    const newOrderRef = doc(collection(db,"orders"))
    await setDoc (newOrderRef, order);
    
    cartList.forEach(async (dato)=> {
      const itemRef = doc(db,"products", dato.id)
      await updateDoc(itemRef,{
        stock: increment(-dato.cantidad)
      })
    })
    clear()
    alert("Tu orden fue creada. ID:"+ newOrderRef.id)
  }

    return (
        
        <div>
        <h1 className="carritoo">Carrito</h1>

        <div className="boton-borrar">
          <button onClick={clear} className='boton-borrar btn btn-primary' >Borrar todas las compras</button>
            <button onClick={createOrder} className='boton-borrar btn btn-dark' >Finalizar compra</button>
            </div>

        {cartList.map ((produc) => <CartItem key={produc.id} produc={produc}/>)}
        <div className="total">
        <p> Total: {totalDeProductosPrecio()}  </p>
          </div>
        </div>
        
    )
}

export default Cart
