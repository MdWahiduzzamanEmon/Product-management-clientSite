import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <div>
        <nav className="py-4">
          <Link
            to="/products"
            className="text-decoration-none text-dark fw-bold fs-5 mx-4"
          >
            Products
          </Link>

          <Link
            to="/addProducts"
            className="text-decoration-none text-dark fw-bold fs-5 mx-4"
          >
            Add Products
          </Link>
        </nav>
      </div>
    );
};

export default Header;