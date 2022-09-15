import Carro from "../components/Carro"

/*
const onAdd = (cantidad) =>{
  console.log(`compraste ${cantidad} unidades `)
}*/
const Zapatillas =({product}) =>{

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
        <Carro initial={0} stock={10}  /> 
            </div>
        </div>
        </>
    )

}

export default Zapatillas;
