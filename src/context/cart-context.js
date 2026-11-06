import { useContext } from "react";
import { createContext } from "react";

export const cartContext = createContext();

export const useCart = () => {
  return useContext(cartContext);
}