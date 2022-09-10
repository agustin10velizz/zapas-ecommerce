import React , {useState} from "react";

export const Comprar = ({initial, stock}) =>{
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
            <button disabled={Carro <= 0 } onClick={restar}  >-</button>
            <span> {Carro} </span>
            <button disabled={Carro >= stock } onClick={sumar} >+</button>
            <div>
            <button   >Agregar carrito</button>
            </div>

        </div></>
    )
}



export default Comprar