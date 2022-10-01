import ItemDetail from '../components/ItemDetail'
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Loader from "../components/Loader";
import { doc, getDoc} from "firebase/firestore";
import { db } from '../utils/fireBase';


const ItemDetailContainer = () => {
    const [dato , setDato, ] = useState ({});
    const [loading ,setLoading ] = useState (false)
    const { id } = useParams();
  
    useEffect(() => {
        setLoading(true)
        const docFetch = async () => {
            const docRef = doc(db, "products", id);
            const docSnap = await getDoc(docRef);
            const itemFirestore = ({
                id: docSnap.id,
                ...docSnap.data()
            })
            setDato(itemFirestore)
            setLoading(false)
        }
        docFetch()
    }, [id]);



    return(
        <div >
        {loading ? <Loader/> : <ItemDetail  dato={dato} /> }
        </div>
    );
}

export default ItemDetailContainer