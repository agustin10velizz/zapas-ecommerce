import { createContext, useState } from "react";

export const CartContext = createContext ();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    
    const addItem = (dato, cantidad) => {
       if (isInCart(dato.id)){
        const indexItem = cartList.findIndex (element => element.dato.id === dato.id );
        cartList[indexItem].cantidad = cartList[indexItem].cantidad + cantidad;
        setCartList([...cartList])
       } else {
        setCartList([...cartList,  dato, cantidad ])
       }
        
    }


    const isInCart = (id) => {
      return  cartList.some (product => product.id === id) ? true : false;}
    
    const removeItem = (id) => {
    const updateCart = cartList.filter (element => element.id !==id);
        setCartList(updateCart)
    }
 
    const clear = () => {
        setCartList([])
    }

   
    const totalProductos = () => {
        return cartList.reduce ((acc, ItemProducts) => acc + ItemProducts.count , 0)
    }

    const totalDeProductosPrecio = () => {
        return cartList.reduce ((acc, ItemProducts) => acc + ( ItemProducts.cantidad * ItemProducts.count ), 0)

    }


    return (
        <CartContext.Provider value={{cartList, addItem, clear, isInCart, removeItem, totalProductos, totalDeProductosPrecio  }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;