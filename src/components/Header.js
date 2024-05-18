import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '/public/assets/imgpsicologia/LauraCamilaLOGO-06.png';

export default function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <Link href="/" passHref>
          <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image
              src={logo}
              alt="Icon"
              className="w-70 h-70
           text-white p-2  rounded-full"
              width={70}
              height={70}
            />
            <span className="ml-3 text-xl">Psicologa Laura Camila</span>
          </div>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/clientes" passHref>
            <div className="mr-5 hover:text-gray-900">Experiencia</div>
          </Link>
          <Link href="/producto" passHref>
            <div className="mr-5 hover:text-gray-900">Planes y Precios</div>
          </Link>
          <Link href="/sobre" passHref>
            <div className="mr-5 hover:text-gray-900">Sobre</div>
          </Link>
        </nav>
        <Link href="/contacto" passHref>
          <button className="inline-flex items-center bg-red-100 border-0 py-1 px-3 focus:outline-none hover:bg-red-300 rounded text-base mt-4 md:mt-0">
            Contactanos
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </Link>
      </div>
    </header>
  );
}
