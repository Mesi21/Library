import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const menuLinks = [
    {
      id: 1,
      path: '/',
      name: 'BOOKS',
    },
    {
      id: 2,
      path: '/',
      name: 'CATEGORIES',
    },
  ];

  return (
    <nav className="navbar flex-row">
      <h1>Bookstore</h1>
      <ul id="menu" className="navmenu flex-row">
        {menuLinks.map((item) => (
          <li key={item.id}>
            <Link to={item.path} activeClassName="active-link" exact>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
