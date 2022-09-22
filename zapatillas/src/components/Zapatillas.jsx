import { useState } from "react";
import { Link } from "react-router-dom";
import Carro from "./Carro"


const Zapatillas =({product}) =>{

    const[Cart, setCart] = useState (false);
    
    const onAdd = (cantidad) =>{
        setCart (true);   
    }
      

    return(
        <>
    
    <div className="imagen-container">
     
     <div className="imagen-zapas">
    
     <img src={product.Imagen} alt="" width="200" height="154" className="zapas" ></img>
        </div>
     <div className="imagen-titulo">
        <h2> {product.Titulo} </h2>

        <p> Color :{product.Colores} </p>
        <p> Talles :{product.Talles}  </p>
        <p> Precio: {product.Precio} </p>
       
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
