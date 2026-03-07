import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '/public/assets/imgpsicologia/LauraCamilaLOGO-06.png';
import DropdownMenu from './DropdownMenu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="text-gray-600 body-font relative">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center justify-between">
        <Link legacyBehavior href="/" passHref>
          <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
            <Image src={logo} alt="Icon" className="w-10 h-10 text-white p-2 rounded-full" width={40} height={40} />
            <span className="ml-3 text-xl">Psicologa Laura Camila</span>
          </div>
        </Link>

        {/* Nav for desktop: horizontal, minimalist */}
        <nav className="hidden md:flex md:ml-auto md:mr-auto items-center text-base justify-center space-x-6">
          <Link legacyBehavior href="/producto" passHref>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="hover:text-gray-900">Planes y Precios</a>
          </Link>
          <Link legacyBehavior href="/sobre" passHref>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="hover:text-gray-900">Sobre</a>
          </Link>
          <Link legacyBehavior href="/psychological-tests" passHref>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="hover:text-gray-900">Tests Psicológicos</a>
          </Link>
          <DropdownMenu />
        </nav>

        {/* Contact button for desktop */}
        <div className="hidden md:flex">
          <Link legacyBehavior href="/contacto" passHref>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="inline-flex items-center bg-red-100 border-0 py-1 px-3 focus:outline-none hover:bg-red-300 rounded text-base">
              Contactanos
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </Link>
        </div>

        {/* Hamburger for mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-900 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu: minimalist vertical dropdown, reduced width and padding for minimalism */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full right-0 w-48 z-10">
          <nav className="flex flex-col items-start text-base py-2 px-4 space-y-2">
            <Link legacyBehavior href="/producto" passHref>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                className="hover:text-gray-900 w-full"
                onClick={toggleMenu}
                role="menuitem"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    toggleMenu();
                  }
                }}
              >
                Planes y Precios
              </a>
            </Link>
            <Link legacyBehavior href="/sobre" passHref>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                className="hover:text-gray-900 w-full"
                onClick={toggleMenu}
                role="menuitem"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    toggleMenu();
                  }
                }}
              >
                Sobre
              </a>
            </Link>
            <Link legacyBehavior href="/psychological-tests" passHref>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                className="hover:text-gray-900 w-full"
                onClick={toggleMenu}
                role="menuitem"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    toggleMenu();
                  }
                }}
              >
                Tests Psicológicos
              </a>
            </Link>
            <DropdownMenu onClick={toggleMenu} />
            <Link legacyBehavior href="/contacto" passHref>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid, jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
              <a
                className="inline-flex items-center bg-red-100 border-0 py-1 px-3 focus:outline-none hover:bg-red-300 rounded text-base mt-2"
                onClick={toggleMenu}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    toggleMenu();
                  }
                }}
              >
                Contactanos
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
