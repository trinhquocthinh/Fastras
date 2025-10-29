'use client';

import type { MouseEventHandler } from 'react';
import { IoCloseOutline, IoMenuOutline } from 'react-icons/io5';

import { navLinks } from '@/constants/layout';

import './Header.scss';

export type HeaderProps = {
  isActive: boolean;
  isNavOpen: boolean;
  onToggleNav: MouseEventHandler<HTMLButtonElement>;
  onCloseNav: () => void;
};

const Header = ({
  isActive,
  isNavOpen,
  onToggleNav,
  onCloseNav,
}: HeaderProps) => (
  <header className={`header${isActive ? ' active' : ''}`} data-header>
    <div className="container">
      <a href="#home" className="logo">
        Fastras<span className="span">.</span>
      </a>

      <nav className={`navbar${isNavOpen ? ' active' : ''}`} data-navbar>
        <button
          className="nav-toggle-btn"
          aria-label="close menu"
          data-nav-toggler
          onClick={onToggleNav}
          type="button"
        >
          <IoCloseOutline aria-hidden="true" />
        </button>

        <ul className="navbar-list">
          {navLinks.map(link => (
            <li className="navbar-item" key={link.href}>
              <a
                className="navbar-link"
                data-nav-link
                href={link.href}
                onClick={onCloseNav}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <a href="#contact" className="btn btn-primary">
        Sign Up
      </a>

      <button
        className="nav-toggle-btn"
        aria-label="open menu"
        data-nav-toggler
        onClick={onToggleNav}
        type="button"
      >
        <IoMenuOutline aria-hidden="true" />
      </button>
    </div>
  </header>
);

export default Header;
