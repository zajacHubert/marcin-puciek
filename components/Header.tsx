'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import styles from './header.module.css';

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isVideoDropdownOpen, setIsVideoDropdownOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const videoDropdownRef = useRef<HTMLUListElement | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileOpen((prevState) => !prevState);
  };

  const closeMenuMobile = () => {
    setIsMobileOpen(false);
  };

  const toggleVideoDropdown = () => {
    setIsVideoDropdownOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        console.log('here2');
        setIsMobileOpen(false);
      }

      if (
        videoDropdownRef.current &&
        !videoDropdownRef.current.contains(event.target as Node)
      ) {
        console.log('here');
        setIsVideoDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className={styles.header}>
      <Link href='/'>
        <div>
          <h1 className={styles.title}>MARCIN PUCIEK</h1>
          <p>MODEL&PHOTOMODEL</p>
        </div>
      </Link>
      <nav>
        <div className={styles.desktopNav}>
          <ul className={styles.menu}>
            <li>
              <Link href='/'>Start</Link>
            </li>
            <li>
              <Link href='/portfolio'>Portfolio</Link>
            </li>
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

        <div className={styles.hamburger} onClick={toggleMobileMenu}>
          {isMobileOpen ? <IoClose /> : <GiHamburgerMenu />}
        </div>

        <div
          ref={mobileMenuRef}
          className={`${styles.mobileNav} ${isMobileOpen ? styles.open : ''}`}
        >
          <ul className={styles.mobileMenu}>
            <li>
              <Link href='/' onClick={closeMenuMobile}>
                Start
              </Link>
            </li>
            <li>
              <Link href='/portfolio' onClick={closeMenuMobile}>
                Portfolio
              </Link>
            </li>
            <li onClick={toggleVideoDropdown} className={styles.video}>
              <Link href='#'>Video</Link>
              {isVideoDropdownOpen && (
                <ul ref={videoDropdownRef} className={styles.mobileDropdown}>
                  <li>
                    <Link href='/video/reklamy' onClick={closeMenuMobile}>
                      Reklamy
                    </Link>
                  </li>
                  <li>
                    <Link href='/video/teledyski' onClick={closeMenuMobile}>
                      Teledyski
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link href='/kontakt' onClick={closeMenuMobile}>
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
