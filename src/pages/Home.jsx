import "./Home.css";


import { getProducts } from "../data/products";
import { Product } from "../components/Product";
import { useCart } from "../context/cart-context";


export const Home = () => {
  const rawProducts = getProducts();

  const {setCartItems, cartItems} = useCart();

  const products = rawProducts.map((product) => {
    const cartMatch = cartItems.find(cartProduct => cartProduct.id === product.id);

    return cartMatch ? {...product, stock: product.stock - cartMatch.quantity} : product;
  })

  return (
    <section className="products">
      <h1>Products</h1>
      <div className="products__container">
        {products.map((product) => (
          <Product key={product.id} product={{...product, quantity: 1}}
          setCartItems={setCartItems} />
        ))}
      </div>
    </section>
  );
};
