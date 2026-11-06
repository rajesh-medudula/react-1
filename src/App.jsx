import { Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";

import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Auth } from "./pages/Auth";
import { ProductDetails } from "./pages/ProductDetails";

import "./App.css";

function App() {

  return (

      <CartContextProvider>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/auth" element={<Auth />}></Route>
            <Route path="/products/:id" element={<ProductDetails />}></Route>
          </Routes>
        </div>
      </CartContextProvider>
  );
}

export default App;
