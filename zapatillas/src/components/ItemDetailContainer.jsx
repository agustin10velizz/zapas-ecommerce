import ItemDetail from '../components/ItemDetail'
import React, {useEffect, useState} from 'react';

const film = {
    id:1,
    Titulo:" Vans SK8-Hi Family (Edicion Especial)",
      Talle:" 41",
       Precio:"$25000",
        Imagen: "https://http2.mlstatic.com/D_NQ_NP_685633-MLA50708125222_072022-W.jpg",
}


const ItemDetailContainer = () => {
    const [dato , setDato] = useState ({});

    useEffect(() =>{
        const getData = new Promise (resolve =>{
            setTimeout(() => {
                resolve(film);
            }, 2000)
        });
        getData.then(res=> setDato(res));
    }, [])

    return(
        <ItemDetail dato={dato} />
    );
}

export default ItemDetailContainer