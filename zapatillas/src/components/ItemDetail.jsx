import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount"
import { CartContext } from "./CartContext";
import { useContext } from "react";



const ItemDetail =({item}) =>{

    const[Cart, setCart] = useState (0);
    const {addItem,  } = useContext (CartContext);

    const onAdd = (cantidad) =>{
        console.log(`agregaste ${item.titulo}, cantidad: ${cantidad}.`)
        addItem (item ,cantidad,)
        setCart(true)
    }
    
 

    return(
     
    
    <div className="promo-container">
     
     <div className="promo-zapas">
    
     <img src={item.imagen} alt="" width="400" height="354" className="promos" ></img>
        </div>
     <div className="imagen-titulo-zapas">
        <h2> {item.titulo} </h2>
        <p> Talles :{item.talles}  </p>
        <p> Precio: <b> ${item.precio}</b> </p>

        { 
            Cart === 0
            ? <ItemCount initial={1} stock={10} onAdd={onAdd}  />
            : <Link to='/cart' > <button className="btn btn-dark" > Ver el carrito</button>  </Link>
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