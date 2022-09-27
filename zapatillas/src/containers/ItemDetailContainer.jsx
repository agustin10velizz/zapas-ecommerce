import ItemDetail from '../components/ItemDetail'
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import Productos from '../utils/Productos';
import Loader from "../components/Loader";



const ItemDetailContainer = () => {
    const [dato , setDato, ] = useState ({});
    const [loading , setLoading] = useState (false)
    const { id } = useParams();
  

        useEffect(() => {
            setLoading (true);
            customFetch(2000, Productos.find(products => products.id == id))
            .then (result => setDato (result))
            .catch (err => console.log (err))
            .finally(() => setLoading(false))
        }, [id])
   


    return(
        <div >
        {loading ? <Loader/> : <ItemDetail  dato={dato} /> }
        </div>
    );
}

export default ItemDetailContainer