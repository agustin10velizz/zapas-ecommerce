import { createContext, useState } from "react";

export const CartContext = createContext ();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    
    const addItem = (product, cantidad) => {
        setCartList([...cartList, product, cantidad])
    }


    const isInCart = (id) => {
      return  cartList.find (product => product.id === id) ? true : false;}
    
    const removeItem = (id) => {
    const updateCart = cartList.filter (product => product.id !==id);
        setCartList(updateCart)
    }

    const clear = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value={{cartList, addItem, clear, isInCart, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;