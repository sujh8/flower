import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import './Navbar.css';
import SearchBox from './SearchBox';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="/images/logo.png" alt="Flower Shop Logo" className="logo" />
      </div>
      <ul className="nav-links">
        {/* Update the Home link to navigate to the root path ("/") */}
        <li><Link to="/">Home</Link></li>
        <li><Link to="/birthday">Birthday</Link></li>
        <li><Link to="/thank-you">Thank You</Link></li>

        <li><Link to="/plants">Plants</Link></li>
        <li><Link to="/roses">Roses</Link></li>
        <li><Link to="/fall">Fall</Link></li> {/* Changed this line */}
      </ul>
      <div className="dropdown">
        <button className="dropbtn">Products</button>
        <div className="dropdown-content">
          <Link to="/plants">Plants</Link>
          <Link to="/roses">Roses</Link>
          <Link to="/birthday">Birthday Roses</Link>
        </div>
      </div>
      <SearchBox />
      <Link to="/cart" className="cart-icon">
        <FaShoppingCart />
      </Link>
    </nav>
  );
}

export default Navbar;
