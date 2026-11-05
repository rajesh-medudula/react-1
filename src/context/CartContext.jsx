import { useState, useEffect } from "react";
import { cartContext } from "./cart-context";
 
export const CartContextProvider = ({children}) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

   const totalItems = cartItems.reduce((accum, currentItem) =>  {
    return accum + currentItem.quantity;
  }, 0);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <cartContext.Provider value={{cartItems, setCartItems, totalItems}}>
      {children}
    </cartContext.Provider>
  )
}

