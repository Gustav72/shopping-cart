import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = ({ isVisible, cartItems }) => {
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    const count = cartItems.reduce((total, item) => total + item.quantity, 0);
    setItemCount(count);
  }, [cartItems]);

  function revealCart() {
    isVisible((prevState) => !prevState);
  }

  return (
    <nav className="nav-bar">
      <Link to="/" className="store-name">
        Forever Pups
      </Link>
      <ul>
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" className="link">
            Puppies
          </Link>
        </li>
        <li>
          <div className="cart-table">
            <img
              src="images/cart-outline.svg"
              alt="shopping cart"
              onClick={revealCart}
              className="cart-img-active"
            />
            <div
              className="cart-item-number"
              style={{
                visibility: itemCount === 0 ? "hidden" : "visible",
              }}
            >
              {itemCount}
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
