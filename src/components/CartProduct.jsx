export const Cartproduct = ({product}) => {

  return (<div className="cart__product">
    <img src={product.image} />
    <div className="cart__product-content">
      <p className="cart__product-title">{product.title}</p>
      <span className="cart__product-quantity">Quantity: {product.quantity}</span>
      <span className="cart__product-price">${product.price}</span>
    </div>
  </div>);
};