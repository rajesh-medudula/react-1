import { useCart } from "../context/cart-context";
import { Cartproduct } from "./CartProduct";

import "./Cart.css";

export const Cart = () => {
  const { cartItems, totalItems } = useCart();
  
  const total = cartItems.reduce((accumulator, currentItem) => {
    return currentItem.quantity * currentItem.price + accumulator;
  }, 0);

  return (
    <section className="cart">
      <div className="cart__content">
        <div className="cart__products">
          {cartItems.map((product) => {
          
            return <Cartproduct key={product.id} product={product} />
          })}
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
