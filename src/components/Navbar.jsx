import './Navbar.css'

import { Link } from "react-router-dom";
import { useCart } from '../context/cart-context';


export const Navbar = () => {

  const {totalItems} = useCart();
   
  return (
    <nav className="header__nav">
      <Link className="header__link" to="/">Home</Link>
      <Link className="header__link" to="/cart">Cart <span className='cart-length'>{totalItems}</span></Link>
      <Link className="header__link" to="/auth">Login</Link>
      <Link className="header__link" to="/auth">Sign Up</Link>
    </nav>
  )
}