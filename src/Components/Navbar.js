import { Link } from "react-router-dom";

const Navbar = () => {
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
              className="cart-img"
            />
            <div className="cart-number">1</div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
