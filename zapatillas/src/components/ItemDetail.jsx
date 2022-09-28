import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount"
import { CartContext } from "./CartContext";
import { useContext } from "react";



const ItemDetail =({dato}) =>{

    const[Cart, setCart] = useState (false);
    const {addItem,  } = useContext (CartContext);

    const onAdd = (cantidad) =>{
        console.log(`agregaste ${dato.titulo}, cantidad: ${cantidad}.`)
        addItem (dato ,cantidad,)
        setCart(true)
    }
    
 

    return(
     
    
    <div className="promo-container">
     
     <div className="promo-zapas">
    
     <img src={dato.imagen} alt="" width="200" height="154" className="promos" ></img>
        </div>
     <div className="imagen-titulo">
        <h2> {dato.titulo} </h2>

        <p> Color :{dato.color} </p>
        <p> Talles :{dato.talles}  </p>
        <p> Precio: ${dato.precio} </p>

        { Cart  ? <Link to='/cart' > <button className="btn btn-dark" > Ver el carrito</button>  </Link>
                : <ItemCount initial={0} stock={10} onAdd={onAdd}  /> 
        }
       
            </div>
        </div>
       
    )
}

export default ItemDetail


/*
const ItemDetail = ({dato}) => {
    return(
        <div className="promo-container">
     
     <div className="promo-zapas">
    
     <img src={dato.Imagen} alt="" width="400" height="254" className="promos" ></img>
        </div>
     <div className="imagen-titulo">
        <h2 className="titulo-vans"> {dato.Titulo} </h2>
        <p> Talles :{dato.Talle}  </p>
        <p> Precio: {dato.Precio} </p>
        <button className="comprar-edicion btn btn-light">Comprar</button>
        
            </div>
        </div>*/