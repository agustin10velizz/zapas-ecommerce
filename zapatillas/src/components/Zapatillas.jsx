import Carro from "../components/Carro"

/*
const onAdd = (cantidad) =>{
  console.log(`compraste ${cantidad} unidades `)
}*/
const Zapatillas =({Titulo, Colores, Talles, Precio, Imagen}) =>{

    return(
        <>
    <div className="imagen-container">
     
     <div className="imagen-zapas">
    
     <img src={Imagen} alt="" width="200" height="154" className="zapas" ></img>
        </div>
     <div className="imagen-titulo">
        <h2> {Titulo} </h2>

        <p> Color :{Colores} </p>
        <p> Talles :{Talles}  </p>
        <p> Precio: {Precio} </p>
        <Carro initial={0} stock={10}  /> 
            </div>
        </div>
        </>
    )

}

export default Zapatillas;
