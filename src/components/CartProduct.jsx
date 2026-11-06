
import { useCart } from "../context/cart-context";

export const Cartproduct = ({product}) => {
 
  const {quantityInc, quantityDec, removeItem} = useCart();

  return (<div className="cart__product">
    <img src={product.image} />
    <div className="cart__product-content">
      <p className="cart__product-title">{product.title}</p>
      <span className="cart__product-quantity">Quantity: {product.quantity}</span>
      <span className="cart__product-price">${product.price}</span>
      <div className="cart__product-btns">
        <button className="cart__product-remove-btn" onClick={() => removeItem(product.id)}>Remove</button>
        <button onClick={() => {quantityInc(product)}}>+</button>
        <button onClick={() => {quantityDec(product)}}>-</button>
      </div>
    </div>
  </div>);
};