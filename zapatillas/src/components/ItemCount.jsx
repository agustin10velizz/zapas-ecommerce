import React , {useState} from "react";

export const ItemCount = ({initial, stock, onAdd }) =>{
   
    const [Contador, setContador] = useState(initial);

    const restar =() =>{
        if (Contador > initial) setContador (Contador - 1);
    }

    const sumar =() =>{
        if (Contador <= stock) setContador(Contador + 1);
        
    }


    return(
        
        <div className="counter">
            <button  onClick={restar} className="suma btn btn-success"  >-</button>

            <span> {Contador} </span>

            <button  onClick={sumar} className="suma btn btn-success" >+</button>
            <div>
           <button onClick={() => onAdd(Contador)}  className=" boton btn btn-dark">Comprar</button>
            </div>

        </div>
    )
}



export default ItemCount