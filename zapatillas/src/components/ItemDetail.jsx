import React from "react";


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
        </div>
    )
}

export default ItemDetail