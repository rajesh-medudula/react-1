import './Productdetails.css';

import { useParams } from "react-router-dom"
import { getProductById } from "../data/products";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from '../context/cart-context';


export const ProductDetails = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const {addToCart} = useCart();

  const product = getProductById(id);

  useEffect(() => {
    if (!product) {
      navigate("/");
    }
  }, [product, navigate]);

  if (!product) {
    navigate("/");
    return;
  }


  return (<section className='product-details'>
    <div className="product-details__container"> 
    <div className="product-details__image-container">
      <img src={product.image}></img>
    </div>
    <div className="product-details__content">
      <p className="product-details__title">{product.title}</p>
      <p className="product-details__price">${product.price}</p>
      <p className="product-details__description">{product.description}</p>
      <button className="product-details__add-btn" onClick={() => addToCart(product.id)}>Add to Cart</button>
    </div>
    </div>
  </section>)
}