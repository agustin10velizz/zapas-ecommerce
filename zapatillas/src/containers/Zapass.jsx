import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList";
import Loader from "../components/Loader";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../utils/fireBase';




const  Zapass = () =>{
    const [data, setData] = useState([]);
    const [loading ,setLoading ] = useState (false)
   const {id} = useParams();

    
   useEffect(() => {
    setLoading(true)
    const firestoreFetch = async () => {
        let q
        if (id) {
            q = query(collection(db, "products"), where('categoryId', '==', parseInt(id)))
        } else {
            q = query(collection(db, "products"))
        }
        const querySnapshot = await getDocs(q);
        const dataFromFirestore = querySnapshot.docs.map(document => ({
            id: document.id,
            ...document.data()
        }))
        setLoading(false)
        return dataFromFirestore
    }
    firestoreFetch()
        .then(result => setData(result))
}, [id]);
  

    return(
    
        <div className="listContainer">
        {loading ? <Loader/>  : <ItemList products={data}/>   }
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