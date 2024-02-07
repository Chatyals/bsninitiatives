import React, { useEffect, useRef, useState } from 'react';
import { BsSearch, BsList } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import bsn from '../../assets/bsn.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMobileMenuOpen(false);
    }
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className={`Navbar ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
      <div className="logo">
        <Link to="/">
          {/* <div>BSN INITIATIVE</div> */}
          <img src={bsn} alt="logo" className="logo" />
        </Link>
      </div>
      <div
        className={`menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}
        ref={menuRef}
      >
        <ul>
          <li onClick={handleLinkClick}>
            <Link to="/ABOUT US">ABOUT US</Link>
          </li>
          <li onClick={handleLinkClick}>
            <Link to="/What we do">WHAT WE DO</Link>
          </li>
          {/* <li onClick={handleLinkClick}>
            <Link to="/Where we work">WHERE WE WORK</Link>
          </li> */}
          <li onClick={handleLinkClick}>
            <BsSearch />
            <Link to="/Vacancy">VACANCY</Link>
          </li>
        </ul>
      </div>
      <div className="mobile-toggle" onClick={handleMobileMenuToggle}>
        <BsList />
      </div>
    </nav>
  );
};

export default Navbar;
