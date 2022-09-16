//map

import Zapatillas from "./Zapatillas";

const ItemList = ( {products}) => {
    console.log (products)
    return(
        <>
        {products.map ( (product) => <Zapatillas key={product.id} product={product} /> )}
        </>
    );
}

export default ItemList