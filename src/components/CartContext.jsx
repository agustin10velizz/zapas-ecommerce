import { createContext, useState } from "react";

export const CartContext = createContext ();

const CartContextProvider = ({children}) => {
    
    const [cartList, setCartList] = useState([]);

    
    const addItem = (item, cantidad) => {
        if(isInCart(item.id)) {
            setCartList(cartList.map(product => {
                return product.id === item.id ? {
                    ...product, cantidad : product.cantidad + cantidad}  : item
            
            }))
           } else {
                setCartList([...cartList, {...item, cantidad}])
           }
    }


    const isInCart = (id) => {
      return  cartList.some (item => item.id === id) ? true : false;}
    
    const removeItem = (id) => {
    const updateCart = cartList.filter (element => element.id !==id);
        setCartList(updateCart)
    }
 
    const clear = () => {
        setCartList([])
    }

   
    const totalProductos = () => {
        return cartList.reduce ((acc, ItemProducts) => acc + ItemProducts.cantidad , 0)
    }

    const totalDeProductosPrecio = () => {
        return cartList.reduce ((acc, ItemProducts) => acc + ( ItemProducts.precio * ItemProducts.cantidad ), 0)

    }


    return (
        <CartContext.Provider value={{cartList, addItem, clear, isInCart, removeItem, totalProductos, totalDeProductosPrecio  }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;