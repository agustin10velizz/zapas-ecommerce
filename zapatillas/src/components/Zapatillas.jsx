import Carro from "../components/Carro"

const onAdd = (quantity) =>{
  console.log(`compraste ${quantity} unidades `)
}
const Zapatillas =({Titulo, Colores, Talles, Precio, Imagen}) =>{

    return(
        <>
<div className="imagen-container">
<h2> {Titulo} </h2>

     <div className="imagen-zapas">
    
     <img src={Imagen} alt="" width="200" height="154" ></img>
        </div>
     <div className="imagen-titulo">
        <p> Colores :{Colores} </p>
        <p> Talles :{Talles}  </p>
        <p> Precio: {Precio} </p>
        <Carro initial={0} stock={10} onAdd={onAdd} /> 
            </div>
        </div>
        </>
    )

}

export default Zapatillas;

