import { useEffect, useState } from "react";
import ItemList from "../components/ItemList";
import getList from "../utils/getList";

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
        {loading ? <h2> Cargando..</h2>  : <ItemList products={data}/>}
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