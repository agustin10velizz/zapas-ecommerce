
import { Link } from "react-router-dom";
import React from "react";


const Item =({producto}) =>{

   
    return(
        <>
    
    <div className="imagen-container">
     
     <div className="imagen-zapas">
    
     <img src={producto.imagen} alt="" width="200" height="154" className="zapas" ></img>
        </div>
     <div className="imagen-titulo">
        <h4> {producto.titulo} </h4>
        
        <Link to={"/item/" + producto.id} className="boton-detalle  btn btn-dark">Ver mas </Link>
  
            </div>
        </div>
        </>
    )

}

export default Item;
