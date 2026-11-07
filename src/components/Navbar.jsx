import "./Navbar.css";

import { Link } from "react-router-dom";
import { useCart } from "../context/cart-context";
import { useAuth } from "../context/auth-context";

export const Navbar = () => {
  const { totalItems } = useCart();
  const { user, logout, authLoginNav, authSignUpNav } = useAuth();

  return (
    <nav className="header__nav">
      <Link className="header__link" to="/">
        Home
      </Link>
      <Link className="header__link header__link--cart" to="/cart">
        Cart{" "}
        <div className="header__cart-length">
          <span>{totalItems}</span>
        </div>
      </Link>
      {user.isAuth ? (
        <div className="header__actions">
          <span>Holla, {user.email}</span>
          <Link to={"/auth"}
            className="header__link header__btn-secondary"
            onClick={logout}
          >
            Logout
          </Link>
        </div>
      ) : (
        <div className="header__actions">
          <Link to={"/auth"}
            className="header__link header__btn-secondary"
            onClick={authLoginNav}
          >
            Login
          </Link>
          <Link to={"/auth"}
            className="header__link header__btn-primary"
            onClick={authSignUpNav}
          >
            Sign up
          </Link>
        </div>
      )}
    </nav>
  );
};
