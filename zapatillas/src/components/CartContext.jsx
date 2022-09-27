import { createContext, useState } from "react";

export const CartContext = createContext ();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    
    const addItem = (dato, cantidad) => {
       if (isInCart(dato.id)){
        const indexItem = cartList.findIndex (ele => ele.dato.id === dato.id );
        cartList[indexItem].cantidad = cartList[indexItem].cantidad + cantidad;
        setCartList([...cartList])
       } else {
        setCartList([...cartList,  dato, cantidad ])
       }
        
    }


    const isInCart = (id) => {
      return  cartList.some (product => product.id === id) ? true : false;}
    
    const removeItem = (id) => {
    const updateCart = cartList.filter (product => product.id !==id);
        setCartList(updateCart)
    }
 
    const clear = () => {
        setCartList([])
    }

   
    const totalProductos = () => {
        return cartList.reduce ((acc, ItemProducts) => acc + ItemProducts.cantidad , 0)
    }



    return (
        <CartContext.Provider value={{cartList, addItem, clear, isInCart, removeItem, totalProductos  }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;