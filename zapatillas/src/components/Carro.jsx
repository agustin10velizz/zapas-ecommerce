import React , {useState} from "react";

export const Comprar = ({initial, stock, onAdd }) =>{
    const [Carro, setCount] = useState(initial);

    const restar =() =>{
        setCount(Carro - 1);
    }

    const sumar =() =>{
        setCount(Carro + 1);
    }


    return(
        <>
        
        <div className="counter">
            <button disabled={Carro <= 0 } onClick={restar} className="suma btn btn-dark"  >-</button>
            <span> {Carro} </span>
            <button disabled={Carro >= stock } onClick={sumar} className="suma btn btn-dark" >+</button>
            <div>
           <button disabled={stock <=0} onClick={() => onAdd(Carro)}  className=" boton btn btn-dark">Comprar</button>
            </div>

        </div></>
    )
}



export default Comprar