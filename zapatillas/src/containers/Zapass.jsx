import { useEffect, useState } from "react";
import Zapatillas from "../components/Zapatillas";
import dataFromDB from "../utils/data";
import customFetch from "../utils/customFetch"

const Zapass = () =>{
    const [data, setData] = useState([]);


    useEffect(() => {
      
       customFetch(2000,dataFromDB) //esto hace que en 2 segundos carge los productos
        .then(resultado =>setData (resultado))
        .catch(err => console.log(err))

        setData(dataFromDB);
    }, []);

    return(
        <>
        {
            data.map(item =>(
    <Zapatillas
        key={item.id}
        id={item.id}
        Titulo={item.Titulo}
        Colores= {item.Colores}
        Talles={item.Talles}
        Precio={item.Precio}
        Imagen= {item.Imagen}
        />
            ))
        }
        
        </>
    );

}









export default Zapass;