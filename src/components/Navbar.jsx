import './Navbar.css'

import { Link } from "react-router-dom";
import { useCart } from '../context/cart-context';
import { useAuth } from '../context/auth-context';

export const Navbar = () => {
  
  const {totalItems} = useCart();
  const {user, logout, authLoginNav, authSignUpNav} = useAuth();


  return (
    <nav className="header__nav">
      <Link className="header__link" to="/">Home</Link>
      <Link className="header__link" to="/cart">Cart <span className='cart-length'>{totalItems}</span></Link>
      {user.isAuth ? <div className='header__actions'>
      <span>Holla, {user.email}</span>
      <button className='header__link header__btn-secondary' onClick={logout}>Logout</button>
        </div> : <div className='header__actions'>
          <Link className='header__link header__btn-secondary' onClick={authLoginNav}>Login</Link>
          <Link className='header__link header__btn-primary' onClick={authSignUpNav}>Sign up</Link> 
          </div>}
    </nav>
  )
}