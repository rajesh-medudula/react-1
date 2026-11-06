
import { useCart } from "../context/cart-context";

export const Cartproduct = ({product}) => {
 
  const {quantityInc, quantityDec} = useCart();

  return (<div className="cart__product">
    <img src={product.image} />
    <div className="cart__product-content">
      <p className="cart__product-title">{product.title}</p>
      <span className="cart__product-quantity">Quantity: {product.quantity}</span>
      <span className="cart__product-price">${product.price}</span>

      <span className="cart__product-btns">
        <button onClick={() => {quantityInc(product)}}>+</button>
        <button onClick={() => {quantityDec(product)}}>-</button>
      </span>
    </div>
  </div>);
};