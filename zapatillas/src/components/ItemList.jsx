//map

import Zapatillas from "./Zapatillas";
const ItemList = ( {products}) => {
    console.log (products)
    return(
        <div >
        {products.map ( (product) => <Zapatillas key={product.id} product={product} /> )}

        </div>

        
    )
    
}


export default ItemList