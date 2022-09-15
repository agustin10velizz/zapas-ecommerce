import { useEffect, useState } from "react";
import getList from "../utils/productos";
import ItemList from "../components/ItemList";

const Zapass = () =>{
    const [data, setData] = useState([]);
    const [loading , setLoading] = useState (false)
   
   /*
    useEffect(() => {
        customFetch (2000, Productos)
        .then(result => setData(result))
        .catch(err => console.log(err))

    }, []);*/

    

    useEffect ( () =>{
        setLoading (true);
        getList()
        .then( (response) => setData (response))
        .catch ( (err) => console.error(err))
        .finally (() => setLoading(false))
    }, [])
  

    return(
    
        <div className="listContainer">
        {loading ? <h1> Cargando..</h1>  : <ItemList products={data}/>}
        </div>
      
    );

}

export default Zapass;

/*
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

}*/