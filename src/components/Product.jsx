
import { useState } from 'react';
import './Product.css'

export const Product = ({product, setCartItems}) => {

const [newProduct, setProduct] = useState(product);

const addToCart = () => {
  if (newProduct.stock <= 0) return;

  setProduct((prevProduct) => ({
    ...prevProduct,
    stock: prevProduct.stock - 1,
  }));

  setCartItems((cartItems) => {
    const productMatch = cartItems.find((cartProduct) => cartProduct.id === product.id);
    if (productMatch) {
      return cartItems.map((item) => item.id === productMatch.id ? {...item, quantity: item.quantity + 1, stock: item.stock - 1} : item);
    } else {
      return [...cartItems, {...newProduct, stock: newProduct.stock - 1}];
    }
  });
}

 return (<div className="product">
  <img src={newProduct.image} alt={newProduct.title}/>
  <div className="product__content">
    <p className="product__title">{newProduct.title}</p>
    <span className="product__price">${newProduct.price}</span>
    <span className="product__stock">Stock: {newProduct.stock}</span>
    <button className="product__add" onClick={addToCart} disabled={newProduct.stock <= 0 ? true : false}>Add to Cart</button>
  </div>
 </div>) 
};