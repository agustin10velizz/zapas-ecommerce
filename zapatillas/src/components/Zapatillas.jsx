
import { Link } from "react-router-dom";



const Zapatillas =({product}) =>{

   
      

    return(
        <>
    
    <div className="imagen-container">
     
     <div className="imagen-zapas">
    
     <img src={product.imagen} alt="" width="200" height="154" className="zapas" ></img>
        </div>
     <div className="imagen-titulo">
        <h4> {product.titulo} </h4>
        
        

        <Link to={"/item/" + product.id} className="boton-detalle  btn btn-dark">Ver mas </Link>

       
       
            </div>
        </div>
        </>
    )

}

export default Zapatillas;
