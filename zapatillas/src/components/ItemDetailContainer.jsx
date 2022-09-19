import ItemDetail from '../components/ItemDetail'
import React, {useEffect, useState} from 'react';

const Especial = {
    id:"1",
    Titulo:" Vans SK8-Hi Family (Edicion Especial)",
      Talle:" 41",
       Precio:"$25000",
        Imagen: "https://http2.mlstatic.com/D_NQ_NP_685633-MLA50708125222_072022-W.jpg",
}


const ItemDetailContainer = () => {
    const [dato , setDato] = useState ({});
    const [loading , setLoading] = useState (false)

    
    useEffect(() =>{
        setLoading (true);
        const getData = new Promise (resolve =>{
            setTimeout(() => {
                resolve(Especial);
            }, 2000)
        });
        getData
        .then( (response) => setDato (response))
        .catch ( (err) => console.error(err))
        .finally (() => setLoading(false))
    }, [])

    return(
        <div >
        {loading ? <h2>Cargando..</h2> : <ItemDetail dato={dato} /> }
        </div>
    );
}

export default ItemDetailContainer