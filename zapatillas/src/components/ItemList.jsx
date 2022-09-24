//map

import Zapatillas from "./Zapatillas";
const ItemList = ( {products}) => {
    return(
        <div >
        {products.map ( (product) => <Zapatillas key={product.id} product={product} /> )}

        </div>

        
    )
    
}


export default ItemList