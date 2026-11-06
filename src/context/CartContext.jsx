import { useState, useEffect } from "react";
import { cartContext } from "./cart-context";
 
export const CartContextProvider = ({children}) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
  }

  const removeItem = (id) => {
    const match = cartItems.find((cartItem) => cartItem.id === id);
    
    if (match) {
      setCartItems(() => {
        return cartItems.filter((item) => item.id !== id);
      })
    } else {
      return;
    }
  }

  const quantityInc = (product) => {
    if (product.stock <= 0) return;

    setCartItems((cartItems) => {
      const match = cartItems.find((cartItem) => cartItem.id === product.id && cartItem);
      
      if (match) {
        return cartItems.map((cartItem) => cartItem.id === match.id ? {...cartItem, quantity: cartItem.quantity + 1, stock: cartItem.stock - 1} : cartItem);
      } else {
        return [...cartItems, product];
      }
    })
  }

  const quantityDec = (product) => {
    if (product.quantity <= 1 ) return;

    setCartItems((cartItems) => {
      const match = cartItems.find((cartItem) => cartItem.id === product.id && cartItem);
      
      if (match) {
        return cartItems.map((cartItem) => cartItem.id === match.id ? {...cartItem, quantity: cartItem.quantity - 1, stock: cartItem.stock + 1} : cartItem);
      } else {
        return [...cartItems, product];
      }
    })
  }

   const totalItems = cartItems.reduce((accum, currentItem) =>  {
    return accum + currentItem.quantity;
  }, 0);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  

  return (
    <cartContext.Provider value={{cartItems, setCartItems, totalItems, clearCart, quantityInc, quantityDec, removeItem}}>
      {children}
    </cartContext.Provider>
  )
}

