import React from 'react';
import './Header.css';
import { useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import Drawer from '../Drawer/Drawer';
import useResize from '../../hooks/useResize.js';

const Header = ({ isLoggedIn }) => {
  const size = useResize();
  const location = useLocation();
  const isIndex = location.pathname === '/';
  return (
    <header className={`header ${isIndex ? 'header_type_main' : ''}`}>
      <Link className="header__route" to="/">
        <img className="header__logo" src={Logo} alt="Логотип" />
      </Link>

      {size.width > 768 ? (
        <Navigation isLoggedIn={isLoggedIn} isLinksWhite={isIndex} />
      ) : isLoggedIn ? (
        <Drawer isLoggedIn={isLoggedIn} isLinksWhite={isIndex} />
      ) : (
        <Navigation isLoggedIn={isLoggedIn} isLinksWhite={isIndex} />
      )}
    </header>
  );
};

export default Header;
