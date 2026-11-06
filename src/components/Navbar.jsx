import './Navbar.css'

import { Link } from "react-router-dom";
import { useCart } from '../context/cart-context';
import { useAuth } from '../context/auth-context';

export const Navbar = () => {

  const {totalItems} = useCart();
  const {user, logout} = useAuth();

  return (
    <nav className="header__nav">
      <Link className="header__link" to="/">Home</Link>
      <Link className="header__link" to="/cart">Cart <span className='cart-length'>{totalItems}</span></Link>
      {user.isAuth && <div className='header__actions'>
      <Link className='header__link header__btn-secondary' onClick={logout} to="/auth">Logout</Link>
        </div>}
    </nav>
  )
}