'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import styles from './header.module.css';

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Stan rozwijanego dropdownu

  const toggleMobileMenu = () => {
    setIsMobileOpen((prevState) => !prevState);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState); // Toggle dla rozwijanego menu
  };

  return (
    <header className={styles.header}>
      <Link href='/'>
        <div>
          <h1 className={styles.title}>MARCIN PUCIEK</h1>
          <p>MODEL & PHOTOMODEL</p>
        </div>
      </Link>
      <nav>
        {/* Desktopowe menu */}
        <div className={styles.desktopNav}>
          <ul className={styles.menu}>
            <li>
              <Link href='/'>Start</Link>
            </li>
            <li>
              <Link href='/portfolio'>Portfolio</Link>
            </li>
            {/* Video dropdown */}
            <li
              className={styles.dropdown}
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <Link href='#'>Video</Link>
              <ul
                className={`${styles.dropdownMenu} ${
                  isDropdownOpen ? styles.dropdownVisible : ''
                }`}
              >
                <li>
                  <Link href='/video/reklamy'>Reklamy</Link>
                </li>
                <li>
                  <Link href='/video/teledyski'>Teledyski</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href='/kontakt'>Kontakt</Link>
            </li>
          </ul>
        </div>

        {/* Ikona hamburgera */}
        <div className={styles.hamburger} onClick={toggleMobileMenu}>
          <GiHamburgerMenu />
        </div>

        {/* Nawigacja mobilna */}
        <div
          className={`${styles.mobileNav} ${isMobileOpen ? styles.open : ''}`}
        >
          <ul className={styles.mobileMenu}>
            <li>
              <Link href='/'>Start</Link>
            </li>
            <li>
              <Link href='/portfolio'>Portfolio</Link>
            </li>
            <li>
              <Link href='/kontakt'>Kontakt</Link>
            </li>
            {/* Video dropdown w menu mobilnym */}
            <li onClick={toggleDropdown} className={styles.video}>
              <Link href='#'>Video</Link>
              {isDropdownOpen && (
                <ul className={styles.mobileDropdown}>
                  <li>
                    <Link href='/video/reklamy'>Reklamy</Link>
                  </li>
                  <li>
                    <Link href='/video/teledyski'>Teledyski</Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
