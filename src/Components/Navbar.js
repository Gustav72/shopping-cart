import { Link } from "react-router-dom"

const Navbar = () => {

    return (
        <nav className="nav-bar">
            <Link to="/" className="store-name">Home</Link>
            <ul>
                <li>
                    <Link to="/" className="link">Home</Link>
                </li>
                <li>
                    <Link to="/products" className="link">Products</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;