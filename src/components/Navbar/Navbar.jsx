import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  const navigate = useNavigate();
  const [isAuth] = useContext(AuthContext);
  const [cart] = useContext(CartContext);

  const handleclick = () => {
    navigate("/login");
  };
  return (
    <div
      style={{ display: "flex", justifyContent: "space-around" }}
      data-cy="navbar"
    >
      <Link to={"/"} data-cy="navbar-home-link">
        Logo
      </Link>
      <span data-cy="navbar-cart-items-count">Cart :( {cart.length} )</span>
      <button onClick={handleclick} data-cy="navbar-login-logout-button">
        {isAuth ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Navbar;
