import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import '../styles/navbar.css';

const Navbar = () => {
  const menuLinks = [
    {
      id: 1,
      path: '/allbooks',
      name: 'BOOKS',
    },
    {
      id: 2,
      path: '/categories',
      name: 'CATEGORIES',
    },
  ];

  return (
    <nav className="navbar flex-row">
      <span className="flex-row">
        <h1 id="logo" className="blueText">Bookstore CMS</h1>
        <ul id="menu" className="navmenu flex-row">
          {menuLinks.map((item) => (
            <li key={item.id}>
              <Link to={item.path}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </span>
      <span className="user">
        <FaUserAlt style={{
          color: '#0290ff',
          height: '15px',
          cursor: 'pointer',
          transition: 'all ease-in 300ms',
        }}
        />
      </span>
    </nav>
  );
};

export default Navbar;
