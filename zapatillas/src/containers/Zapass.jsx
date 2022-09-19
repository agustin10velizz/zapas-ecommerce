import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList";
import customFetch from "../utils/customFetch"
import Productos from "../utils/getList";

const Zapass = () =>{
    const [data, setData] = useState([]);
    const [loading , setLoading] = useState (false)
   const {id} = useParams();
   /*
    useEffect(() => {
        customFetch (2000, Productos)
        .then(result => setData(result))
        .catch(err => console.log(err))

    }, []);*/
   
   
    
    useEffect ( () =>{
        if (id){
            setLoading (true);
            customFetch(2000, Productos.filter (products => products.categoryId == id ))
            .then (result => setData (result))
            .catch (err => console.log (err))
            .finally (() => setLoading(false))
        } else { 
            setLoading (true);
            customFetch(2000, Productos)
            .then (result => setData (result))
            .catch (err => console.log (err))
            .finally (() => setLoading(false))
        }
    }, [id])
  

    return(
    
        <div className="listContainer">
        {loading ? <h2> Cargando..</h2>  : <ItemList products={data}/>   }
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

}


  setLoading (true);
        getList()
        .then( (response) => setData (response))
        .catch ( (err) => console.error(err))
        .finally (() => setLoading(false))   */