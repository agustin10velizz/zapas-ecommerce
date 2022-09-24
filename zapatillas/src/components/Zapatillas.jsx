import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Carro from "./Carro"
import { CartContext } from "./CartContext";


const Zapatillas =({product}) =>{

    const[Cart, setCart] = useState (false);
    const {addItem} = useContext (CartContext);


    const onAdd = (cantidad) =>{
        setCart (true); 
       addItem (product,cantidad)
       
    }
      

    return(
        <>
    
    <div className="imagen-container">
     
     <div className="imagen-zapas">
    
     <img src={product.imagen} alt="" width="200" height="154" className="zapas" ></img>
        </div>
     <div className="imagen-titulo">
        <h3> {product.titulo} </h3>
        
        <p> Talles :{product.talles}  </p>
        <p> Precio: {product.precio} </p>

        <Link to={"/category/" + product.categoryId} className="btn btn-info">Ver mas productos</Link>

        {
            Cart
                ? <Link to='/cart' > <button className="btn btn-dark" > Ver detalle de la compra</button>  </Link>
                : <Carro initial={0} stock={10} onAdd={onAdd}/>
        }
       
            </div>
        </div>
        </>
    )

}

export default Zapatillas;
