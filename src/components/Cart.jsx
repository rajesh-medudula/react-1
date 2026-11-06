import { useCart } from "../context/cart-context";
import { Cartproduct } from "./CartProduct";
import { Link } from "react-router-dom";

import "./Cart.css";

export const Cart = () => {
  const { cartItems, totalItems, clearCart } = useCart();
  
  const total = cartItems.reduce((accumulator, currentItem) => {
    return currentItem.quantity * currentItem.price + accumulator;
  }, 0);

  return (
    <section className="cart">
      <div className="cart__content">
        <button className="cart__clear-btn" onClick={clearCart}>Clear Cart</button>
        <div className="cart__products">
          {cartItems.length > 0 ? cartItems.map((product) => {
            return <Cartproduct key={product.id} product={product} />
          }) : (<div className="cart__empty">
            <p>Cart is Empty!</p>
            <Link to="/">Go Home {"->"}</Link>
          </div>)}
        </div>
        <div className="cart__summary">
          <p className="cart__total">Total: ${total.toFixed(2)}</p>
          <p className="cart__items">Items: {totalItems}</p>
          <button className="cart__place-btn">Place Order</button>
        </div>
      </div>
    </section>
  );
};
