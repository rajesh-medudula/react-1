
import { useCart } from "../context/cart-context";
import "./Product.css";
import { useNavigate } from "react-router-dom";

export const Product = ({ product }) => {
  const {addToCart} = useCart();
  const navigate = useNavigate();


  const navToProductDetails = (id) => {
    navigate(`/products/${id}`);
  }

  return (
    <div className="product">
      <div className="product__img-wrapper">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product__content">
        <div className="product__content-text">
          <p className="product__title">{product.title}</p>
          <span className="product__price">${product.price}</span>
          <span className="product__stock">Stock: {product.stock}</span>
        </div>
        <div className="product__actions">
          <button className="product__btn product__btn--view" onClick={() => {navToProductDetails(product.id)}}>
            View Details
          </button>
          <button
            className="product__btn product__btn--add"
            onClick={() => addToCart(product.id)}
            disabled={product.stock <= 0 ? true : false}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
