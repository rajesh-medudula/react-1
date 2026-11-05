import { Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";
import { useAuth } from "./AuthContext";

import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Cart } from "./components/Cart";
import { Auth } from "./components/Auth";

import "./App.css";

function App() {

  const auth = useAuth();

  console.log(auth)
  return (
    <div>
    <CartContextProvider>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/auth" element={<Auth />}></Route>
        </Routes>
    </CartContextProvider>
    </div>
  );
}

export default App;
